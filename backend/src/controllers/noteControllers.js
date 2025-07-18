import Note from '../models/Note.js'

export const createNote = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        
        if (!req.user) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }

        const owner = req.user._id;

        if (!title || title.trim() === '') {
            return res.status(400).json({ error: "Você deve digitar um título" });
        }

        if (content && content.length > 10000) {
            return res.status(400).json({ error: "O conteúdo não pode exceder 10.000 caracteres" });
        }

        if (tags && tags.length > 10) {
            return res.status(400).json({ error: "Uma nota não pode ter mais de 10 tags" });
        }

        const newNote = await Note.create({
            title: title,
            content,
            tags,
            owner
        });

        res.status(201).json(newNote);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors });
        }
        res.status(500).json({ error: "Erro ao criar a nota" });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            { title, content, tags, $inc: { currentVersion: 1 } },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: 'Nota não encontrada' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNote = async (req, res) =>{
    try {
        const deletedNote = await Note.findOneAndDelete({ 
            _id: req.params.id, 
            owner: req.user._id 
        });

        if (!deletedNote) {
            return res.status(404).json({ error: 'Nota não encontrada'});
        }
        res.status(200).json({ message: 'Nota deletada com sucesso'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNote = async (req, res) => {
    try{
    const note = await Note.findOne({
        _id: req.params.id, 
        owner: req.user._id 
    })
    if(!note) return res.status(404).json({error: "Nota não encontrada" })
    
    res.status(200).json(note);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
  }

export const getAllNotes = async(req, res) => {
    try {
        if (!req.user) return res.status(401).json({ error: "Usuário não autenticado" });
        
        const owner = req.user._id;
        const notes = await Note.find({ owner }).sort({ createdAt: -1 }); 

        if (notes.length === 0) return res.status(404).json({ error: "Nenhuma nota encontrada" });
        
        res.status(200).json(notes);

    } catch (error) {res.status(500).json({ error: "Erro ao buscar as notas" });}
};
import {
    createNoteService,
    updateNoteService,
    deleteNoteService,
    getNoteService,
    getAllNotesService
} from '../services/noteServices.js';

export const createNote = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const owner = req.user._id;
        
        const newNote = await createNoteService(title, content, tags, owner);
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
        const { id } = req.params;
        const owner = req.user._id;

        const updatedNote = await updateNoteService(id, owner, { title, content, tags });

        if (!updatedNote) {
            return res.status(404).json({ error: 'Nota não encontrada' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const owner = req.user._id;

        const deletedNote = await deleteNoteService(id, owner);

        if (!deletedNote) {
            return res.status(404).json({ error: 'Nota não encontrada'});
        }
        res.status(200).json({ message: 'Nota deletada com sucesso'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        const owner = req.user._id;

        const note = await getNoteService(id, owner);
        
        if(!note) return res.status(404).json({error: "Nota não encontrada" });
        
        res.status(200).json(note);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllNotes = async(req, res) => {
    try {
        const owner = req.user._id;
        const notes = await getAllNotesService(owner);
        
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar as notas" });
    }
};
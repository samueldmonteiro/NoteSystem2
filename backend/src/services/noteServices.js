import Note from '../models/Note.js';

export const createNoteService = async (title, content, tags, owner) => {
    const newNote = await Note.create({
        title,
        content,
        tags,
        owner
    });
    return newNote;
};

export const updateNoteService = async (noteId, owner, updateData) => {
    const updatedNote = await Note.findOneAndUpdate(
        { _id: noteId, owner },
        { ...updateData, $inc: { currentVersion: 1 } },
        { new: true, runValidators: true }
    );
    return updatedNote;
}

export const deleteNoteService = async (noteId, owner) => {
    const deletedNote = await Note.findOneAndDelete({ 
        _id: noteId, 
        owner 
    });
    return deletedNote;
};

export const getNoteService = async (noteId, owner) => {
    const note = await Note.findOne({
        _id: noteId, 
        owner 
    });
    return note;
};

export const getAllNotesService = async (owner) => {
    const notes = await Note.find({ owner }).sort({ createdAt: -1 });
    return notes;
}
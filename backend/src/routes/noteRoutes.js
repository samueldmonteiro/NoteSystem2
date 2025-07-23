import express from 'express';
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from '../controllers/noteControllers.js'
import { authenticateJWT} from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/authValidateMiddleware.js'
import { createNoteValidator, noteIdValidator, updateNoteValidator } from '../validators/noteValidators.js';

const router = express.Router();

router.post("/createnote", authenticateJWT, validate(createNoteValidator), createNote);
router.delete("/deletenote/:id", authenticateJWT, validate(noteIdValidator), deleteNote);
router.put("/updatenote/:id", authenticateJWT, validate(updateNoteValidator), updateNote);
router.get("/getallnotes", authenticateJWT, getAllNotes);
router.get("/getnote/:id", authenticateJWT, validate(noteIdValidator), getNote);

export default router;
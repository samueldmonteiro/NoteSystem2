import express from 'express';
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from '../controllers/noteControllers.js'
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/createnote", authenticateJWT, createNote);
router.delete("/deletenote/:id", authenticateJWT, deleteNote)
router.put("/updatenote/:id", authenticateJWT, updateNote)
router.get("/getallnotes", authenticateJWT, getAllNotes)
router.get("/getnote/:id",authenticateJWT, getNote)

export default router;
import express from "express";
import {
  getNotes,
  getNotesbyId,
  createNote,
  deletNote,
  UpdateNote,
} from "../controllers/notesControllers.js";

const router = express.Router();

//separé la lógica y la moví a controllers
router.get("/", getNotes);

router.get("/:id", getNotesbyId);

router.post("/", createNote);

router.delete("/:id", deletNote);

router.put("/:id", UpdateNote);

export default router;

import express from "express";
import Note from "../models/noteModels.js";

const router = express.Router();

// es la misma ruta :) / === /api/notas
//obtener todas las notaas
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error.apply("error al obtener las notas: ", error);
    res.status(500).json({ message: "internal server error" });
  }
});

//obtener una nota por id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);

    if (!note) return res.status(404).json({ error: "nota no encontrada" });

    res.status(200).json(note);
  } catch (error) {
    console.error("error al obtener la nota por id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
});

//crear una nueva nota
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = new Note({ title, description });
    const savedNote = await note.save();

    if (savedNote) {
      res
        .status(201)
        .json({ message: "nota creada exitosamente", note: savedNote });
    }
  } catch (error) {
    console.log("error al crear una nota: ", error);
    res.status(500).json({ error: "internal server error" });
  }
});

//eliminar una nota
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const noteDeleted = await Note.findByIdAndDelete(id);
    if (!noteDeleted)
      return res.status(404).json({ error: "nota no eliminada" });

    res.status(200).json({ message: "nota eliminada correctamente" });
  } catch (error) {
    console.error("error al eliminar una nota: ", error);
    res.status(500).json({ error: "internal server error" });
  }
});

//editar una nota
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "nota actualizada correctamente", note: updatedNote });
  } catch (error) {
    console.error("error al editar una nota", error);
    res.status(500).json({ error: "internal server error" });
  }
});

export default router;

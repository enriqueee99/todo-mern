import Note from "../models/noteModels.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("error al obtener las notas: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNotesbyId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const note = await Note.findById(id);

    if (!note) return res.status(404).json({ error: "nota no encontrada" });

    res.status(200).json(note);
  } catch (error) {
    console.error("error al obtener la nota por id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createNote = async (req, res) => {
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
};

export const deletNote = async (req, res) => {
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
};

export const UpdateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } //devuelve el nuevo elemento ya actualizado
    );
    res
      .status(200)
      .json({ message: "nota actualizada correctamente", note: updatedNote });
  } catch (error) {
    console.error("error al editar una nota", error);
    res.status(500).json({ error: "internal server error" });
  }
};

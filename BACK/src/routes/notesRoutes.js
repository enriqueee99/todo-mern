import express from "express";
const router = express.Router();

// es la misma ruta :) / === /api/notas
router.get("/", () => {
  console.log("enviando las notas desde notas");
});

//obtener una nota por id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  console.log("enviando nota por id: ", id);
});

//crear una nueva nota
router.post("/", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  console.log(title, description);
});

//eliminar una nota
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log("eliminando nota..");
});

//editar una nota
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updateDta = req.body;
  console.log(id);
  console.log(updateDta);
  console.log("editando una nota");
});

export default router;

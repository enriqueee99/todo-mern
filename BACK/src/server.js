import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
//permite leer archivos json y transformarlos en formato object
app.use(express.json());
app.use("/api/notes", notesRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`servidor levantado desde puerto http://localhost: ${PORT}`);
});

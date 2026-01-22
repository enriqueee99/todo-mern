import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();
//permite leer archivos json y transformarlos en formato object
app.use(
  cors({
    origin: ["http://localhost:5173", "https://todo-mern-note.netlify.app"],
  }),
);
app.use(express.json());
app.use("/api/notes", notesRouter);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`servidor levantado desde puerto http://localhost: ${PORT}`);
  });
});

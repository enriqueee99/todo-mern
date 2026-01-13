import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;

    await mongoose.connect(dbURI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.log("error al conectar con MongoDB: ", error);
    process.exit(1);
  }
};

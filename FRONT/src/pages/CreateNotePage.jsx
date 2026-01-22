import FormNote from "../components/FormNote";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL;

const CreateNote = () => {
  const navigate = useNavigate();
  const handleCreate = async (note) => {
    try {
      console.log(apiURL);
      await axios.post(`${apiURL}/api/notes`, note).then((res) => {
        if (res.status !== 201) {
          throw new Error("Error al crear una nueva nota");
        }

        toast.success("¡Nota creada con éxito!", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored",
        });
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <FormNote
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      ></FormNote>
    </div>
  );
};

export default CreateNote;

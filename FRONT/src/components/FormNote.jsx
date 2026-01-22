import { useEffect, useState } from "react";

const FormNote = ({ onSubmit, initialDate }) => {
  const [note, setNotes] = useState(initialDate);

  //aqui necesito actualizar los cambios si los datos iniciales cambian

  useEffect(() => {
    setNotes(initialDate);
  }, [initialDate]);

  const handleChange = (e) => {
    setNotes({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10"
    >
      <input
        className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
        type="text"
        placeholder="Crea una nueva nota"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="outline-0 input block w-full mb-8 lg:input-lg focus:ring-0 focus:outline-0 border-0"
        name="description"
        id=""
        value={note.description}
        onChange={handleChange}
        placeholder="Descripción de la nota"
      ></textarea>
      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  );
};

export default FormNote;

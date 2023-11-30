// FORMULARIO PARA AGREGAR NUEVAS TAREAS

import { useState } from "react";
import PropTypes from "prop-types";

const TaskForm = ({ onAgregarTarea }) => {
  // Componente | Parámetrp

  const [nuevaTarea, setnuevaTarea] = useState(""); //

  const handleInputChange = (e) => {
    // Función | Se ejecuta cada vez que el valor del input cambia
    setnuevaTarea(e.target.value); // Actualiza con el valor actual del input
  };

  const handleFormSubmit = (e) => {
    // Cuando se envía el formulario
    e.preventDefault(); // Evita que la página recargue
    onAgregarTarea(nuevaTarea); // Llama a la función
    setnuevaTarea("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleInputChange}
          placeholder="Ingrese la tarea"
          className="form-control"
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm" type="submit">Agregar Tarea</button>
      </div>

    </form>
  );
};

TaskForm.propTypes = {
  onAgregarTarea: PropTypes.func.isRequired,
};

export default TaskForm;

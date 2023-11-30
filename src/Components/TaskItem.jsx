// Aquí se reprensenta INDIVIDUALMENTE UNA CADA TAREA

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setCompleted] = useState(task.completed);

  useEffect(() => {
    setCompleted(task.completed);
  }, [task.completed]);

  const handleCompleteClick = () => {
    setCompleted(true);
    onCompleteTask(task.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center m-2">
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {task.name}
      </span>

      {isCompleted ? (
        <button onClick={handleDeleteClick} className="btn btn-danger ml-4">
          Eliminar
        </button>
      ) : (
        <div>
          <button onClick={handleCompleteClick} className="btn btn-success ml-4">
            Completar
          </button>
          <button onClick={handleDeleteClick} className="btn btn-danger ml-4">
            Eliminar
          </button>
        </div>
      )}
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskItem;

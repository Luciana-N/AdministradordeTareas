// Aquí se muestra la LISTA DE TAREAS

import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask  }) => {  // Parámetros de la función
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => (    // Método map en el array de tasks, para iterar sobre cada tarea. Función flecha
        <TaskItem key={task.id} task={task} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />  // Renderiza componente TaskItem para cada una de las tareas
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
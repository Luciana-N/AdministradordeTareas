import { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);  // Array (contiene las teras)  | Función para actualizar

  useEffect (() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, [] )

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [ tasks ])

  useEffect(() => {         // Efecto de actualización para mostrar un mensaje cuando la lista de tareas cambia
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleCompleteTask = (taskId) => {        // Función para marcar tareas como completadas
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {    // Función para eliminar tareas
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (taskName) => {   // Función para agregar nuevas tareas
    const nuevaTarea = {    // Nuevo Objeto de Tarea
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks((prevTasks) => [nuevaTarea, ...prevTasks]);   // La agrega al Array
  };

  return (
    <main className='bg-dark vh-100 text-white d-flex align-items-center justify-content-center'>
      <div className='container p-3 col-md-6 offset-md-3'>
        <h1>Administrador de Tareas</h1>
        <TaskForm onAgregarTarea={handleAddTask} />
        <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
      </div>
    </main>

  );
};

export default App;

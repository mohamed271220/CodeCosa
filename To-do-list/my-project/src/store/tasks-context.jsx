import { createContext, useState } from 'react';

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  updateTaskStatus: () => {},
});

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => [
      { ...task, id: Math.random().toString(), status: 'active' },
      ...prevTasks,
    ]);
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  }

  function updateTaskStatus(taskId, newStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  }

  const tasksContext = {
    tasks,
    addTask,
    deleteTask,
    updateTaskStatus,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {children}
    </TasksContext.Provider>
  );
}

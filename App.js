import React, { useState } from "react";
import TaskInput from "./TaskInput.js";
import TaskList from "./TaskList.js";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const editTask = (index) => {
    const editedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: prompt("Edit task:", task.text) } : task
    );
    setTasks(editedTasks);
  };

  return (
    <div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;

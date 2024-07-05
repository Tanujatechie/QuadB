import React from "react";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => editTask(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

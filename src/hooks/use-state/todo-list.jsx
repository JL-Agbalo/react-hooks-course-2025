import { useState } from "react";

export const TodoList = () => {

  const [tasks, setTasks] = useState([]);
const [taskText, setTaskText] = useState("");

const addTask = () => {
  if (taskText.trim()) {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText(""); 
  }
};

const toggleCompletion = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

return (
  <div>
    <h1>To-Do List</h1>
    
    <input
      type="text"
      value={taskText}
      onChange={(e) => setTaskText(e.target.value)}
      placeholder="Enter task"
    />
    <button onClick={addTask}>Add Task</button>

    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(index)}
          />
          {task.completed ? <s>{task.text}</s> : task.text}
        </li>
      ))}
    </ul>
  </div>
);
};


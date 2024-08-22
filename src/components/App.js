
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    let updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  return (
    <div id="main">
      <h1>To-Do List</h1>
      <input type="text" value={newTask} onChange={handleInput} />
      <button onClick={addTask}>Add Todo</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

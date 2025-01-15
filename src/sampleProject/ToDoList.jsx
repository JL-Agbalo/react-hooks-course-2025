import React, {useState} from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask(){
        if (newTask === '') {
            alert('Please enter a task')
            return
        }
        setTasks(t => [...t, newTask])
        setNewTask('')
    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function modeTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            // [[index], [index - 1]] = [[index - 1], [index]]

            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function modeTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // [[index], [index + 1]] = [[index + 1], [index]]

            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
  return (
    <div>
        <h1>To-Do-List</h1>
        <ul>
            {tasks.map((task, index) => (
               <li key={index}>
                    <span>{task}</span> 
                    <button onClick={() => (deleteTask(index))}>Delete</button>
                    <button onClick={() => (modeTaskUp(index))}>Up</button>
                    <button onClick={() => (modeTaskDown(index))}>Down</button>
               </li> 
            ))}
        </ul>
        <div>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
  )
}

export default ToDoList
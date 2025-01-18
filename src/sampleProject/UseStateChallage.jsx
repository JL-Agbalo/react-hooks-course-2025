import React, {useState} from 'react'

function UseStateChallage() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const editTask = (index) => {
        const newTask = prompt("Edit task:", taskList[index]);
        if (newTask !== null) {
            const newTaskList = [...taskList];
            newTaskList[index] = newTask;
            setTaskList(newTaskList);
        }
    }   

    const addTask = () => {
        setTaskList([...taskList, task])
        setTask('')
    }

    const removeTask = (index) => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

    return(
           <div>    
       <h1>Todo List</h1>
        <ul>
            {taskList.map((task, index) => (
            <li key={index} >{task} <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => removeTask(index)}>Delete</button></li>
            ))}
        </ul>
         <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
         <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default UseStateChallage
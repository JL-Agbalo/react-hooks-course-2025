import React, {useState} from 'react'

function UseStateChallage() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        setTaskList([...taskList, task])
        setTask('')
    }

    const removeTask = (index) => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

  return (
    <div >
       <h1>Todo List</h1>
        <ul>
            {taskList.map((task, index) => (
                <li key={index} onClick={removeTask}>{task}</li>
            ))}
        </ul>
         <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
         <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default UseStateChallage
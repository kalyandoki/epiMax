import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import TaskDetails from '../TaskDetails'
import './index.css'

export default function TaskListInterface() {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('')
  const [percentage, setPercentage] = useState('')
  const [endTime, setEndTime] = useState('')
  const [completeOrNot, setCompleteOrNot] = useState('')
  const [taskLists, setTaskLists] = useState([])

  const onChangeInput = event => {
    setTask(event.target.value)
  }

  const onSelectPercentage = event => {
    setPercentage(event.target.value)
  }

  const onChangeInputTime = event => {
    setTime(event.target.value)
  }

  const onChangeInputEndTime = event => {
    setEndTime(event.target.value)
  }

  const onCompleteOrNot = event => {
    setCompleteOrNot(event.target.value)
  }

  const onDeleteTaskList = id => {
    console.log(`delete ${id}`)
    const newTaskLists = taskLists.filter(each => each.id !== id)
    setTaskLists(newTaskLists)
  }

  const onAddTask = event => {
    event.preventDefault()
    const newTaskList = {
      id: uuidv4(),
      task,
      percentage,
      completeOrNot,
      time,
      endTime,
    }
    setTaskLists(prevTaskList => [...prevTaskList, newTaskList])
    setTask(' ')
    setTime('')
    setEndTime('')
    setPercentage('')
    setCompleteOrNot('')
  }

  return (
    <div>
      <div className="main-container">
        <div className="tl-container">
          <form onSubmit={onAddTask}>
            <div className="user-inter">
              <label htmlFor="task" className="user-head">
                Enter Your Task
              </label>
              <input
                placeholder="Enter Your Task..."
                type="text"
                id="task"
                className="user-input"
                onChange={onChangeInput}
              />
            </div>
            <div className="user-inter">
              <label htmlFor="time" className="user-head">
                Enter Your Start Time
              </label>
              <input
                placeholder="Enter Your Time..."
                type="text"
                id="time"
                className="user-input"
                onChange={onChangeInputTime}
              />
            </div>
            <div className="user-inter">
              <label htmlFor="percentage" className="user-head">
                Select work Complete percentage
              </label>
              <select
                id="percentage"
                className="user-input"
                onChange={onSelectPercentage}
              >
                <option>0%</option>
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
                <option>40%</option>
                <option>50%</option>
                <option>60%</option>
                <option>70%</option>
                <option>80%</option>
                <option>90%</option>
                <option>100%</option>
              </select>
            </div>
            <div className="user-inter">
              <label htmlFor="time" className="user-head">
                Enter Your End Time
              </label>
              <input
                placeholder="Enter Your Time..."
                type="text"
                id="time"
                className="user-input"
                onChange={onChangeInputEndTime}
              />
            </div>
            <div className="user-inter">
              <label className="user-head" htmlFor="complete or not">
                Select Complete Or Not
              </label>
              <select
                id="complete or not"
                className="user-input"
                onChange={onCompleteOrNot}
              >
                <option>Completed</option>
                <option>On Processing..</option>
              </select>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className="user-list">
            <h1 className="head-list">User Task List</h1>
          </div>
        </div>
        <ul>
          {taskLists.map(each => (
            <TaskDetails
              taskDetails={each}
              key={each.id}
              onDeleteTaskList={() => onDeleteTaskList(each.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

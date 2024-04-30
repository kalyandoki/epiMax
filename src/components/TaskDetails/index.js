import {useState} from 'react'

import TaskSummaryPage from '../TaskSummaryPage'
import './index.css'

export default function TaskDetails(props) {
  const {taskDetails, onDeleteTaskList} = props
  const {id, task, time, percentage, endTime, completeOrNot} = taskDetails

  const [summary, setSummary] = useState(false)

  const onDeleteTask = () => {
    onDeleteTaskList(id)
  }

  return (
    <div>
      <div className="list-container">
        <p>* {task}</p>
        <p>{time}</p>
        <p>{percentage}</p>
        <p>{endTime}</p>
        <p>{completeOrNot}</p>
        <button
          className="del-btn"
          type="button"
          onClick={() => onDeleteTask(id)}
        >
          Delete
        </button>
        <button
          className="del-btn"
          type="button"
          onClick={() => setSummary(!summary)}
        >
          Summary
        </button>
      </div>
      <div>{summary ? <TaskSummaryPage taskDetails={taskDetails} /> : ''}</div>
    </div>
  )
}

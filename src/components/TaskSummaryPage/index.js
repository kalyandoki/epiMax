import './index.css'

export default function TaskSummaryPage(props) {
  const {taskDetails} = props
  const {id, task, time, percentage, endTime, completeOrNot} = taskDetails
  return (
    <div className="summary-list">
      <h1 className="sum-head">*** Task Summary Page ***</h1>
      <p>
        1. My Task Name : <span>{task}</span>
      </p>
      <p>
        2. Task Starting Time : <span>{time}</span>
      </p>
      <p>
        3. Task Completing Percentage : <span>{percentage}</span>
      </p>
      <p>
        4. Task Ending Time : <span>{endTime}</span>
      </p>
      <p>
        5. Task Completed Or OnProcessing : <span>{completeOrNot}</span>
      </p>
      <p>
        6. Task Id : <span>{id}</span>
      </p>
    </div>
  )
}

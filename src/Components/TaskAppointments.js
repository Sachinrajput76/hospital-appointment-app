import React, { useState } from 'react'
import '../styles/TaskAppointments.css'
import { TaskData } from './TaskData'
import PopUpWindow from './popUpWindow'

const TaskAppointments = () => {
  const [open, setOpen] = useState(false)
  const [taskData, setTaskData] = useState(TaskData)
  const [taskId, setTaskId] = useState(null)
  function popupWindow() {
    setOpen(!open)
  }
  function popUpAndId(id) {
    setTaskId(id)
    popupWindow()
  }

  const appointments = taskData.map((card, index) => (
    <div
      key={index}
      id={card.id}
      className='Card'
      onClick={() => popUpAndId(card.id)}
    >
      <h1>{card.PatientName}</h1>
      <p>{card.ItemRequested}</p>
      <p>{card.PatientDetails}</p>
      <div className='doctorDetails'>
        <div>
          <span>{card.avatar}</span>
          <h4>{card.Requester}</h4>
        </div>
        <div>
          <h4>Requested Date: {card.RequestedDate}</h4>
          <h4>Due Date: {card.DueDate}</h4>
        </div>
      </div>
    </div>
  ))

  function getTaskDetails() {
    return taskData.filter((task) => task.id == taskId)
  }

  return (
    <>
      {open && taskId ? (
        <PopUpWindow
          popupWindow={popupWindow}
          taskData={getTaskDetails(taskId)}
        />
      ) : (
        ''
      )}
      {appointments}
    </>
  )
}

export default TaskAppointments

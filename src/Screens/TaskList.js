import React from 'react'
import '../styles/TaskList.css'
import TaskAppointments from '../Components/TaskAppointments'

const Tasklist = () => {
  return (
    <>
      <div className='TaskList'>
        <h4>Task List </h4>
        <div className='CurrentTask'>
          <p>
            <strong>Current Context :</strong>
          </p>
          <p> UCSF Head and Neck Surgery</p>
        </div>
      </div>
      <div className='allAppointments'>
        <div className='sortAppointments'>
          <div>
            <h4>Sort By</h4>
            <select>
              <option>Patient Name</option>
              <option>Patient Name</option>
              <option>Patient Name</option>
            </select>
          </div>
          <div>
            <h4>Search</h4>
            <input type='text' />
            <i className='fas fa-search' />
          </div>
        </div>
        <div>
          <TaskAppointments />
        </div>
      </div>
    </>
  )
}

export default Tasklist

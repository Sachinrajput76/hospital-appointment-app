import React, { useState, useRef } from 'react'
import '../styles/popUpWindow.css'
import { UseInputHook } from '../Hooks/inputHook'

const PopUpWindow = ({ taskData, popupWindow }) => {
  const [data, setData] = useState(taskData)
  const [chooseFile, setChooseFile] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)

  const inputFileRef = useRef(null)
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0].name)

    const selectedFile = inputFileRef.current.click()
  }
  const onFileSubmit = (event) => {
    event.preventDefault()
  }

  {
    /* All input change handlers using custom hook */
  }

  const [patientName, setPatientName] = UseInputHook(data[0].PatientName)
  const [organisationRequester, setOrganisationRequester] = UseInputHook(
    data[0].OrganisationRequester
  )
  const [status, setStatus] = UseInputHook(data[0].Status)
  const [patientRecordNumber, setPatientRecordNumber] = UseInputHook(
    data[0].PatientRecordNumber
  )
  const [requester, setRequester] = UseInputHook(data[0].Requester)
  const [requestedDate, setRequestedDate] = UseInputHook(data[0].RequestedDate)
  const [patientDOB, setPatientDOB] = UseInputHook(data[0].PatientDOB)
  const [itemRequested, setItemRequested] = UseInputHook(data[0].ItemRequested)
  const [dueDate, setDueDate] = UseInputHook(data[0].DueDate)
  const [patientDetails, setPatientDetails] = UseInputHook(
    data[0].PatientDetails
  )
  {
    /* All input change handlers using custom hook */
  }
  const inputsData = data.map((TaskDetails, index) => (
    <div key={index}>
      <div className='inputData'>
        <div>
          <input type='text' value={patientName} onChange={setPatientName} />
          <label htmlFor={TaskDetails.PatientName}>Patient Name</label>
        </div>
        <div>
          <input
            type='text'
            value={organisationRequester}
            onChange={setOrganisationRequester}
          />
          <label htmlFor={TaskDetails.OrganisationRequester}>
            Organisation Requester
          </label>
        </div>
        <div>
          <input
            type='text'
            value={status}
            onChange={setStatus}
            style={{ color: 'orange' }}
          />
          <label htmlFor={TaskDetails.Status}>Status</label>
        </div>
        <div>
          <input
            type='text'
            value={patientRecordNumber}
            onChange={setPatientRecordNumber}
          />
          <label htmlFor={TaskDetails.PatientRecordNumber}>
            Patient Record Number
          </label>
        </div>
        <div>
          <input type='text' value={requester} onChange={setRequester} />
          <label htmlFor={TaskDetails.Requester}>Requester</label>
        </div>
        <div>
          <input
            type='text'
            value={requestedDate}
            onChange={setRequestedDate}
          />
          <label htmlFor={TaskDetails.RequestedDate}>Requested Date</label>
        </div>
        <div>
          <input type='text' value={patientDOB} onChange={setPatientDOB} />
          <label htmlFor={TaskDetails.PatientDOB}>Patient DOB</label>
        </div>
        <div>
          <input
            type='text'
            value={itemRequested}
            onChange={setItemRequested}
          />
          <label htmlFor={TaskDetails.ItemRequested}>Item Requested</label>
        </div>
        <div>
          <input type='text' value={dueDate} onChange={setDueDate} />
          <label htmlFor={TaskDetails.DueDate}>Due Date</label>
        </div>
      </div>
      <div className='patientDetails'>
        <textarea
          id='notes'
          name='notes'
          rows='6'
          cols='50'
          value={patientDetails}
          onChange={setPatientDetails}
        ></textarea>
        <label htmlFor='notes'>Notes</label>
      </div>
      <div className='fileSection'>
        {chooseFile ? (
          <div className='File'>
            <i
              className='fas fa-times close'
              onClick={() => setChooseFile(!chooseFile)}
            />
            <span className='fileName'>
              <strong>
                <i className='fas fa-paperclip' />
              </strong>
              <span ref={inputFileRef}>
                {selectedFile == null ? 'Choose file' : selectedFile}
              </span>
            </span>
          </div>
        ) : null}

        <div>
          <form onSubmit={onFileSubmit}>
            <input type='file' id='files' onChange={onFileChange} />
            {chooseFile && (
              <label htmlFor='files' className='uploadButton'>
                Upload
              </label>
            )}

            <button className='submitButton'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  ))
  return (
    <div className='popUpWindowBackground'>
      <pre>{/* {JSON.stringify(taskData, null, 2)} */}</pre>
      <div className='popUpWindow'>
        <i className='fas fa-times close' onClick={popupWindow} />
        {inputsData}
      </div>
    </div>
  )
}

export default PopUpWindow

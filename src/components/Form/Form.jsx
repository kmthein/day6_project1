import React, { useState } from 'react'

const Form = ({addNewEmp}) => {
  const [empData, setEmpData] = useState({
    id: '',
    name: '',
    age: ''
  })

  const idOnChange = (event) => {
    setEmpData({
      ...empData,
      id: event.target.value
    })
  }

  const nameOnChange = (event) => {
    setEmpData({
      ...empData,
      name: event.target.value
    })
  }

  const ageOnChange = (event) => {
    setEmpData({
      ...empData,
      age: event.target.value
    })
  }

  const submitData = (event) => {
    event.preventDefault();
    addNewEmp(empData);
    setEmpData({
      id: '',
      name: '',
      age: ''
    })
  }
  return (
    <div>
        <form onSubmit={submitData}>  
          <input type="text" placeholder='ID' onChange={idOnChange} value={empData.id} required/>
          <input type="text" placeholder='Name' onChange={nameOnChange} value={empData.name} required/>
          <input type="text" placeholder='Age' onChange={ageOnChange} value={empData.age} required/>
            <button className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
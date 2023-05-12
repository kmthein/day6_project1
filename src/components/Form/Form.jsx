import React, { useRef, useState } from 'react'

const Form = ({addNewEmp}) => {
  // const [empData, setEmpData] = useState({
  //   id: '',
  //   name: '',
  //   age: ''
  // })
  
  // const idOnChange = (event) => {
  //   setEmpData({
  //     ...empData,
  //     id: event.target.value
  //   })
  // }

  // const nameOnChange = (event) => {
  //   setEmpData({
  //     ...empData,
  //     name: event.target.value
  //   })
  // }

  // const ageOnChange = (event) => {
  //   setEmpData({
  //     ...empData,
  //     age: event.target.value
  //   })
  // }

  const idChangeRef = useRef();
  const nameChangeRef = useRef();
  const ageChangeRef = useRef();

  const submitData = (event) => {
    event.preventDefault();
    const empData = {
      id: idChangeRef.current.value,
      name: nameChangeRef.current.value,
      age: ageChangeRef.current.value
    }
    addNewEmp(empData);
    idChangeRef.current.value = "";
    nameChangeRef.current.value = "";
    ageChangeRef.current.value = "";
  }
  return (
    <div>
        <form onSubmit={submitData}>  
          <input type="number" placeholder='ID' ref={idChangeRef} required/>
          <input type="text" placeholder='Name' ref={nameChangeRef} required/>
          <input type="number" placeholder='Age' ref={ageChangeRef} required/>
            <button className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
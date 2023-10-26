import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmployeeContext } from '../contexts/context';

const Create = () => {
  const navigate = useNavigate();
  
  const {employeeData, setEmployeeData} = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5174/employee/', employeeData)
    .then(() => {
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className='max-w-lg w-96 border bg-gray-200 shadow-xl py-7 px-11 m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
      <h1 className='text-2xl mb-4'>Add Employee Details:</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mb-4'>
          <label htmlFor="empID">EMP ID</label>
          <input type="number" id='empID' className='h-10 px-3' onChange={(e) => setEmployeeData({...employeeData, empId: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="empName">Name</label>
          <input type="text" id='empName' className='h-10 px-3' onChange={(e) => setEmployeeData({...employeeData, name: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="designation">Designation</label>
          <input type="text" id='designation' className='h-10 px-3' onChange={(e) => setEmployeeData({...employeeData, designation: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className='h-10 px-3' onChange={(e) => setEmployeeData({...employeeData, email: e.currentTarget.value})} required />
        </div>

        <div className='flex gap-6 mt-8'>
          <button className='btn bg-blue-500 text-white px-3 py-2'>Save</button>
          <button className='btn bg-blue-500 text-white px-3 py-2' onClick={() => {navigate('/')}}>Back</button>
        </div>
      </form>
    </div>
  )
}

export default Create

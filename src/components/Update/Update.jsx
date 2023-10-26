import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeContext } from '../contexts/context';

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const {employeeData, setEmployeeData} = useContext(EmployeeContext);

    useEffect(() => {
    axios.get(`http://localhost:5174/employee/${id}`)
    .then((res) => {
        setEmployeeData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5174/employee/${id}`, employeeData)
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className='max-w-lg w-96 border bg-gray-200 shadow-xl py-7 px-11 m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
      <h1 className='text-2xl mb-4'>Update Details:</h1>
      <form onSubmit={handleUpdate}>
        <div className='flex flex-col mb-4'>
          <label htmlFor="empID">EMP ID</label>
          <input type="number" id='empID' className='h-10 px-3' value={employeeData.empId} onChange={(e) => setEmployeeData({...employeeData, empId: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="empName">Name</label>
          <input type="text" id='empName' className='h-10 px-3' value={employeeData.name} onChange={(e) => setEmployeeData({...employeeData, name: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor="designation">Designation</label>
          <input type="text" id='designation' className='h-10 px-3' value={employeeData.designation} onChange={(e) => setEmployeeData({...employeeData, designation: e.currentTarget.value})} required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className='h-10 px-3' value={employeeData.email} onChange={(e) => setEmployeeData({...employeeData, email: e.currentTarget.value})} required />
        </div>

        <div className='flex gap-6 mt-8'>
          <button type='submit' className='btn bg-blue-500 text-white px-3 py-2'>Update</button>
          <button type='button' className='btn bg-blue-500 text-white px-3 py-2' onClick={() => {navigate('/')}}>Back</button>
        </div>
      </form>
    </div>
  )
}

export default Edit

import React, { useContext, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { EmployeeContext } from '../contexts/context';

const Dashboard = () => {
  const {empData, setEmpData} = useContext(EmployeeContext);
  const {newEmpData, setNewEmpData} = useContext(EmployeeContext);

  useEffect(() => {
    axios.get('http://localhost:5174/employee/')
    .then((data) => {
      setEmpData(data.data);
    }).catch(err => {
      console.log(err);
    })
  }, [newEmpData])

  const handleDelete = (id) => {
    let result = confirm("Are you sure?");
    
    if(result) {
      axios.delete(`http://localhost:5174/employee/${id}`)
      .then(() => {
        const del = empData.filter(item => id !== item.id);
        setNewEmpData(del);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  return (
      <>
        <h1 className='text-center text-2xl font-medium py-4'>Employee Details</h1>
        <div className="w-11/12 m-auto text-right mb-4">
          <Link type='button' className='border px-4 py-2 bg-emerald-500 text-white' to='/Create'>Add +</Link>
        </div>
        <table className="border-separate border border-slate-400 w-11/12 m-auto">
          <thead>
            <tr className='bg-blue-700 text-white'>
              <th className='border border-slate-300 h-10'>EMP ID</th>
              <th className='border border-slate-300 h-10'>Name</th>
              <th className='border border-slate-300 h-10'>Designation</th>
              <th className='border border-slate-300 h-10'>Email</th>
              <th className='border border-slate-300 h-10'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              empData.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td className='border border-slate-300 h-10 px-2'>{ele.empId}</td>
                    <td className='border border-slate-300 h-10 px-2'>{ele.name}</td>
                    <td className='border border-slate-300 h-10 px-2'>{ele.designation}</td>
                    <td className='border border-slate-300 h-10 px-2'>{ele.email}</td>
                    <td className='border border-slate-300 h-10 flex items-center justify-center gap-3'>
                      <Link to={`/Read/${ele.id}`} type='button' className='text-orange-500'><VisibilityIcon /></Link>
                      <Link to={`/Update/${ele.id}`} type='button' className='text-teal-700'><EditIcon /></Link>
                      <button type='button' className='text-red-700' onClick={() => handleDelete(ele.id)}><DeleteIcon /></button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </>
  )
}

export default Dashboard

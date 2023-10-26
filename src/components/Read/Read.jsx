import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EmployeeContext } from '../contexts/context';


const Read = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const {showData, setShowData} = useContext(EmployeeContext);

    useEffect(() => {
        axios.get(`http://localhost:5174/employee/${id}`)
        .then(res => {
            setShowData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className='max-w-lg w-96 border bg-gray-200 shadow-xl py-7 px-11 m-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
            <h1 className='text-2xl mb-4'>Details of Employee:</h1>
            <div>
                <span className='font-semibold'>EMP ID: </span>
                <span>{showData.empId}</span>
            </div>
            <div>
                <span className='font-semibold'>Name: </span>
                <span>{showData.name}</span>
            </div>
            <div>
                <span className='font-semibold'>Designation: </span>
                <span>{showData.designation}</span>
            </div>
            <div>
                <span className='font-semibold'>Email: </span>
                <span>{showData.email}</span>
            </div>

            <div className='flex gap-6 mt-8'>
                <Link to={`/Update/${id}`} type='button' className='btn bg-blue-500 text-white px-3 py-2'>Edit</Link>
                <button type='button' className='btn bg-blue-500 text-white px-3 py-2' onClick={() => {navigate('/')}}>Back</button>
            </div>
        </div>
    )
}

export default Read

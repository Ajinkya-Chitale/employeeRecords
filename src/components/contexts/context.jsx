import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    // States used in dashboard
    const [empData, setEmpData] = useState([]);
    const [newEmpData, setNewEmpData] = useState([]);

    // States used in Create, Update component
    const [employeeData, setEmployeeData] = useState({
        empId: '', 
        name: '', 
        designation: '', 
        email: ''
    });

    // States used in Read component
    const [showData, setShowData] = useState({});

    return (
        <EmployeeContext.Provider value={{empData, setEmpData, newEmpData, setNewEmpData, employeeData, setEmployeeData, showData, setShowData}}>
            { children }
        </EmployeeContext.Provider>
    )
}
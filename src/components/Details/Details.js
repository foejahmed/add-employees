import React, { useState } from 'react';
import './Details.css';
import fakeEmployee from '../../fakeEmployee'
import EmployeeList from '../EmployeeList/EmployeeList';
import TotalSalary from '../TotalSalary/TotalSalary';

const Details = () => {
    const firstFifteen = fakeEmployee.slice(0,15);
    const [employees, ] = useState(firstFifteen);               
    const [employeeSalary, setEmployeeSalary] = useState([]);

    const handleSalary = (employee) => {
        console.log("click marche", employee);
        const newSalary = [...employeeSalary, employee];
        setEmployeeSalary(newSalary);
    }

    return (
        <div className="details-about">
            <div className="empolyee-container">                
                    {
                        employees.map(employee =><EmployeeList 
                            handleSalary = {handleSalary}
                            employees={employee}
                        ></EmployeeList>)
                    }                
            </div>
            <div className="employee-salary">
                <TotalSalary employeeSalary={employeeSalary}></TotalSalary>
            </div>       
        </div>

    );
};

export default Details;

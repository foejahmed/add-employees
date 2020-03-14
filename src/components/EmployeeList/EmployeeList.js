import React from 'react';
import './EmployeeList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const EmployeeList = (props) => {
    const {img, name, email, mobile, salary} = props.employees;
    
    return (
        <div className="employees">
            <div className="employee-photo">
                <img src={img} alt=""/>
            </div>
            <div className="employee-details">                
               <p><h3>Name: {name}</h3></p>
                <p><h4>Email: {email}</h4></p>
                <p><h5>Mobile: {mobile}</h5></p>
                <h2>Annual Salary: ${salary}</h2>
                <button 
                className="add-me-Btn" 
                onClick = {() => props.handleSalary(props.employees)}
                ><FontAwesomeIcon icon={faPlus}/> Add Me  </button>
            </div>
        </div>
    );
};

export default EmployeeList;

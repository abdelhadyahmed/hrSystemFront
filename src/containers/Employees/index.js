import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee, getEmployees, updateEmployee } from '../../redux/actions/employeeActions'
import AddEmployee from './AddEmployee'

export default function Employees() {
    const { allEmployees } = useSelector(state=>state.employees)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getEmployees())
    },[dispatch])
    
    
    const handleDelete = (id)=>{
        dispatch(deleteEmployee(id))
    }
    
    const handleEdit = (id)=>{
        dispatch(updateEmployee({
                email: "test1@email.com",
                first_name: "Abdelhady",
                hire_date: "adfcadv",
                id: id,
                last_name: "Ahmed",
                phone_number: "adfadv",
                salary: "fadf",
        },id))
    }

    return (
    <div className="employee">
        <div className="container">
            <AddEmployee />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Hiring Date</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployees?.map((employee)=>(
                        <tr key= {employee.id}>
                            <td>{employee.first_name} {employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone_number}</td>
                            <td>{employee.hire_date}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <button onClick={()=>handleEdit(employee.id)}>Edit</button>
                                <button onClick={()=>handleDelete(employee.id)}>Delete</button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

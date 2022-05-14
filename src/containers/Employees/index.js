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
                id: id,
                first_name: "Abdelhady",
                last_name: "Ahmed",
                email: "test1@email.com",
                phone_number: "01116246917",
                hire_date: "19-5-2022",
                salary: "600$",
        }))
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

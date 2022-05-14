import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/actions/employeeActions'

export default function AddEmployee() {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = data => dispatch(addEmployee(data))

    return (
    <div>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="first_name">First Name</label>
            <input type="text" {...register("first_name")} />

            <label htmlFor="last_name">Last Name</label>
            <input type="text" {...register("last_name")} />

            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} />

            <label htmlFor="phone_number">Phone</label>
            <input type="text" {...register("phone_number")} />

            <label htmlFor="hire_date">Hiring Date</label>
            <input type="text" {...register("hire_date")} />

            <label htmlFor="salary">Salary</label>
            <input type="text" {...register("salary")} />

            <input type="submit" value="Add Employee" />
        </form>
    </div>
  )
}

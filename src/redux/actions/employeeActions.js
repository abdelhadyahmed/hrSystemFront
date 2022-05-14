import axios from "axios"
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "./types"
const API_URL = "http://127.0.0.1:8000/api"

export const getEmployees = () =>{
    let employees = []
    return async (dispatch)=>{
        try {
            const req = await axios.get(`${API_URL}/show`);
            employees = req.data
            dispatch({type: GET_EMPLOYEES, employees})
        }catch(error){
            console.log(error.message)
        }     
    }
}

export const addEmployee = (employee) =>{
    return async (dispatch)=>{
        try{
            await axios.post(`${API_URL}/store`,employee);
            dispatch({type: ADD_EMPLOYEE, employee})
        }catch(error){
            console.log(error.message)
        }
    }
}


export const updateEmployee = (employeeObject,id)=>{
    return async (dispatch)=>{
        try{
            await axios.post(`${API_URL}/update/${id}`,employeeObject)
            dispatch({type: UPDATE_EMPLOYEE, employee: employeeObject, id})
        }catch(error){
            console.log(error.message)
        }
    }
}

export const deleteEmployee = (id)=>{
    return async (dispatch)=>{
        try{
            await axios.post(`${API_URL}/destroy/${id}`)
            dispatch({type: DELETE_EMPLOYEE, id})
        }catch(error){
            console.log(error.message)
        }
    }
}
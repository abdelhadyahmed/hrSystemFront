import axios from "axios"
import { API_URL } from "../../config"
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "./types"

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

export const addEmployee = (employeeObject) =>{
    return async (dispatch)=>{
        try{
            const req = await axios.post(`${API_URL}/store`,employeeObject);
            dispatch({type: ADD_EMPLOYEE, employee: req.data})
        }catch(error){
            console.log(error.message)
        }
    }
}


export const updateEmployee = (employeeObject)=>{
    return async (dispatch)=>{
        try{
            const req = await axios.post(`${API_URL}/update/${employeeObject.id}`,employeeObject)
            dispatch({type: UPDATE_EMPLOYEE, updatedEmployee: req.data})
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
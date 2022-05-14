import { GET_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/types"

const employeeReducer = (state= {}, action)=>{
    switch (action.type){
        case GET_EMPLOYEES:
            return {...state, allEmployees: action.employees}
        case ADD_EMPLOYEE:
            return {...state, allEmployees: [...state.allEmployees, action.employee]}
        case UPDATE_EMPLOYEE:
            let updatedEmployees = state.allEmployees.map((employee)=>{
                if(employee.id === action.updatedEmployee.id) return { ...action.updatedEmployee }
                return employee
            })
            return {...state, allEmployees: updatedEmployees}
        case DELETE_EMPLOYEE:
            return {...state, allEmployees: state.allEmployees.filter(employee=> employee.id !== action.id)}
        default:
            return state
    }
}

export default employeeReducer
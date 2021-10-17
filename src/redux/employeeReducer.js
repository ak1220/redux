import { SEARCH_EMPLOYEE  } from "./employeeTypes"

const initialState = {
    numOfEmployees : 24
}

const employeeReducer = (state= initialState, action) => {
       switch(action.type){
           case SEARCH_EMPLOYEE : 
           return {
               ...state,
               numOfEmployees:state.numOfEmployees-1
           }
           default:return state

       }
}

export default employeeReducer
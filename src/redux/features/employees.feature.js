import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {EmployeeService} from '../../services/employeeService';

let employees = EmployeeService.getAllEmployees();

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees
    },
    reducers: {
        updateSelected: function (state, action) {
            let selectedEmployees = state.employees.map((emp, k) => {
                if (emp.id === action.payload) {
                    return {
                        ...emp,
                        isSelected: !emp.isSelected
                    }

                }
                else {
                    return emp;
                }
            })
            state.employees = selectedEmployees;
        }
    }
});
export const { updateSelected } = employeesSlice.actions;
export default employeesSlice.reducer;


// useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(user => {
//             let employees = user.data.map((emp, k) => {
//                 return {
//                     ...emp,
//                     isSelected: false,
//                 }
//             })
//             setState({
//                 employees
//             })
//         })
//         .catch(err => console.log(err.message));
// }, [])

// const updateSelected = (empId) => {
//     let selectedEmployees = state.employees.map((emp, k) => {
//         if (empId === emp.id) {
//             return {
//                 ...emp,
//                 isSelected: !emp.isSelected
//             }
//         }
//         else {
//             return emp;
//         }
//     })
//     setState({
//         employees: selectedEmployees
//     })
// }
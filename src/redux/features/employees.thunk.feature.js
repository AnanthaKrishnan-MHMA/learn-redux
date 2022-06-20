import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";


let initialState = {
    employees: [],
    loading: true,
    error: null,
}
export const fetchUsers = createAsyncThunk(
    'users/fetchUserStatus',
    async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    }
)

const employeesThunkSlice = createSlice({
    name: 'employeesThunk',
    initialState,
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.employees= action.payload;
        }).addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = "oops,something went wrong!"
        })
    }
});
export const { updateSelected } = employeesThunkSlice.actions;
export default employeesThunkSlice.reducer;


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
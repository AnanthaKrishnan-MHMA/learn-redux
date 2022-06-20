import counterReducer from "./features/counter.feature";
import employeesReducer from '../redux/features/employees.feature';
import employeesThunkReducer from '../redux/features/employees.thunk.feature';
const rootReducer = {
    counter: counterReducer,
    employees: employeesReducer,
    employeesThunk: employeesThunkReducer,
};
export default rootReducer;
import counterReducer from "./features/counter.feature";
import employeesReducer from '../redux/features/employees.feature';
const rootReducer = {
    counter: counterReducer,
    employees: employeesReducer
};
export default rootReducer;
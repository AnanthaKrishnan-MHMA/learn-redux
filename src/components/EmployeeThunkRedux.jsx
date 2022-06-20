import React from 'react';
import {updateSelected} from '../redux/features/employees.thunk.feature';
import { useSelector,useDispatch } from 'react-redux';

function EmployeeThunkRedux(props) {
    const dispatch = useDispatch();

    const empStore = useSelector((state)=>{
        return state['employeesThunk']
    })

    const updateSelectedEmp = (empId) => {
        dispatch(updateSelected(empId));
    }

    return (
        <div>
            <div class="alert alert-warning" role="alert">
               This employees component uses Redux with in-built redux-thunk[fetches data from api using axios].
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-primary text-center m-3">
                        <h2>Employees</h2>
                    </div>
                    <div className="col-4">
                        {empStore.employees.map((employee, k) => {
                            return (
                                <div key={k} className="card m-1">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-primary">
                                                    <input className="form-check-input me-2" type="checkbox" onClick={() => updateSelectedEmp(employee.id)} checked={employee.isSelected}/>
                                                    {employee.name}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-6">
                        {empStore.employees.map((emp, k) => {
                            if (emp.isSelected) {
                                return (
                                    <div key={k} className="card text-bg-dark m-2">
                                        <div className="card-body">
                                            <div className="card-text">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item text-bg-dark">
                                                        Name: {emp.name}
                                                    </li>
                                                    <li className="list-group-item text-bg-light">
                                                        Email: {emp.email}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeThunkRedux;
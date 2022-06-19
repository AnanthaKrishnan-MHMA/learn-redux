import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Employee(props) {
    const [state, setState] = useState({
        employees: [],
    });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(user => {
                let employees = user.data.map((emp, k) => {
                    return {
                        ...emp,
                        isSelected: false,
                    }
                })
                setState({
                    employees
                })
            })
            .catch(err => console.log(err.message));
    }, [])
    const updateSelected = (empId) => {
        let selectedEmployees = state.employees.map((emp, k) => {
            if (empId === emp.id) {
                return {
                    ...emp,
                    isSelected: !emp.isSelected
                }
            }
            else {
                return emp;
            }
        })
        setState({
            employees: selectedEmployees
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-primary text-center m-3">
                        <h2>Employees</h2>
                    </div>
                    <div className="col-4">
                        {state.employees.map((employee, k) => {
                            return (
                                <div key={k} className="card m-1">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-primary">
                                                    <input className="form-check-input me-2" type="checkbox" onClick={() => updateSelected(employee.id)} />
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
                        {state.employees.map((emp, k) => {
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
                                                    <li className="list-group-item text-bg-light">
                                                        Company: {emp.company.name}
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

export default Employee;
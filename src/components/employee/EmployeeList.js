import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class EmployeeList extends Component {


    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                    <div className = "class-body">
                    <h5 className = "card-title">
                        {employee.name}
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <a href="#"onClick = {() => this.props.deleteEmployee(employee.id)} className="card-link">You're Fired</a>
                    </h5>
                    </div>
                    </div>
                )
            }
            </section>
        )
    }
}
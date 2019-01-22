import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    render() {

        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        </h4>
                            {employee.name}
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)
                                            .then(() => this.props.history.push("/employee"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}
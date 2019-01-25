import React, { Component } from "react"


export default class OwnerForm extends Component {
    // Set initial state


    state = {
        ownerName: "",
        ownerPhone: "",
    }

    // this.constructNewAnimal = this.constructNewAnimal.bind(this)


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
            const Owner = {
                name: this.state.ownerName,
                phone: this.state.ownerPhone,
                // employeeId: this.props.employees.find(
                //     e => e.name === this.state.employee).id
            };

            // Create the animal and redirect user to animal list
            this.props.addOwner(Owner)
            .then(() => this.props.history.push("/owners"));
        }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerName"
                               placeholder="Owner name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhone">Phone Number</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerPhone" placeholder="Phone" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                        defaultValue=""
                        name="employee"
                        id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}
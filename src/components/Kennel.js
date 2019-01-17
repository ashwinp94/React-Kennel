import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from './LocationList/LocationList';


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h2>Student Kennels</h2>
                <LocationList/>
                <EmployeeList/>
            </div>
        );
    }
}

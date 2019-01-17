import React, { Component } from "react"
import EmployeeList from "./Employee/EmployeeList"
import LocationList from "./Location/LocationList"
import AnimalList from "./Animal/AnimalList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    // This will eventually get pulled from the API
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        {id:1, name: "dog"},
        {id:2, name: "cat"},
        {id:3, name: "lizard"},
        {id:4, name: "tiger"}
    ]


    state = {
        locations: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees = {this.state.employees} />
                <AnimalList animals = {this.state.animals}/>
            </article>
        )
    }
}

export default Kennel
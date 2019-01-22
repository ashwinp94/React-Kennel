import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import OwnerManager from '../modules/OwnerManager';
import LocationManager from '../modules/LocationManager';
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import OwnerList from './owner/OwnersList';
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'




export default class ApplicationViews extends Component {
    state = {
        locations:[],
        animals: [],
        employees: [],
        owners: []
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
            })
            )
        }

        deleteEmployee = id => {
            return fetch(`http://localhost:5002/employees/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
        }

        deleteOwner = id => {
            return fetch(`http://localhost:5002/owners/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
        }

        componentDidMount() {
            const newState = {}

                LocationManager.getAll().then(allLocations=>{
                    this.setState({
                        locations: allLocations
                    })
                })

                OwnerManager.getAll().then(allOwners =>{
                    this.setState({
                        owners:allOwners
                    })
                })

                EmployeeManager.getAll().then(allEmployees=>{
                    this.setState({
                        employees: allEmployees
                    })
                })

                AnimalManager.getAll().then(allAnimals => {
                    this.setState({
                        animals: allAnimals
                    })
                })
            }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
                <Route  path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route  path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                  <Route path="/animals/:animalId(\d+)" render={(props) => {
                      return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />

            </React.Fragment>
        )
    }
}

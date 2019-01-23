import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import APIManager from "../modules/AnimalManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import LocationDetail from './location/LocationDetail'
import OwnerList from './owner/OwnersList';
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import AnimalForm from './animal/Animalform'
import Login from './authentication/Login'





export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {

        locations:[],
        animals: [],
        employees: [],
        owners: []
        }
            componentDidMount() {
                // Example code. Make this fit into how you have written yours.
                AnimalManager.getAll().then(allAnimals => {
                  this.setState({
                    animals: allAnimals
                  });
                });

                LocationManager.getAll().then(allLocations => {
                  this.setState({
                    locations: allLocations
                  });
                });

                EmployeeManager.getAll().then(allEmployees => {
                  this.setState({
                    employees: allEmployees
                  });
                });

                OwnerManager.getAll().then(allOwners => {
                  this.setState({
                    owners: allOwners
                  });
                });
              }

    render() {
        return (
            <React.Fragment>
                {/* login */}

                <Route path="/login" component={Login} />

                {/* locations */}

                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route  path="/locations/:locationId(\d+)" render={(props) => {
                    return (<LocationDetail {...props} locations={this.state.locations} />)
                }} />

                {/* owners */}

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
                <Route  path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

                {/* employees */}

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                    employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                <Route  path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />


                {/* animals */}

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} animals={this.state.animals}
                                                  deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}   addAnimal={this.addAnimal}
                                                    employees={this.state.employees}/>
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal}
                                                    animals={this.state.animals} />
                }} />

            </React.Fragment>
        )
    }
}

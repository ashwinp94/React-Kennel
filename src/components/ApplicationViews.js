import { Route } from 'react-router-dom'
import React, { Component } from "react"
import APIManager from "../modules/APIManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import LocationDetail from './location/LocationDetail'
import OwnerList from './owner/OwnersList';
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'




export default class ApplicationViews extends Component {
    constructor(props)  {
        super(props);
        this.state = {

        locations:[],
        animals: [],
        employees: [],
        owners: []
        }
        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.deleteOwner = this.deleteOwner.bind(this)
    }

        deleteAnimal = id => {
        APIManager.connectToData({dataSet: 'animals', fetchType: 'DELETE', deleteId: id,})
        .then(()=> APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embeditem:""}))
        .then(animals=> {this.setState({animals:animals})})
        }

        deleteEmployee = id => {
        APIManager.connectToData({dataSet: 'employees', fetchType: 'DELETE', deleteId: id,})
        .then(()=> APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embeditem:""}))
        .then(employees=> {this.setState({employees:employees})})
        }

        deleteOwner = id => {
        APIManager.connectToData({dataSet: 'owners', fetchType: 'DELETE', deleteId: id,})
        .then(()=> APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embeditem:""}))
        .then(owners => {this.setState({owners:owners})})
            }

        componentDidMount() {
            APIManager.connectToData({dataSet: 'owners', fetchType: 'GET', embedItem: ""})
            .then(owners => {this.setState({owners: owners})})
            .then(() => APIManager.connectToData({dataSet: 'animals', fetchType: 'GET', embedItem: ""}))
            .then(animals => {this.setState({animals: animals})})
            .then(()=> APIManager.connectToData({dataSet: 'employees', fetchType: 'GET', embedItem: ""}))
            .then(employees => {this.setState({employees:employees})})
            .then(()=> APIManager.connectToData({dataSet: 'locations', fetchType: 'GET', embedItem: ""}))
            .then(locations => {this.setState({locations:locations})})
        }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route  path="/locations/:locationId(\d+)" render={(props) => {
                    return (<LocationDetail {...props} locations={this.state.locations} />)
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

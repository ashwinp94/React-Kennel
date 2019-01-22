import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import APIManager from '../modules/APIManager'


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
                    return <LocationList  locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}




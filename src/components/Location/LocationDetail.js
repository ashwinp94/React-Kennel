import React, { Component } from "react"
import Redirect from "react-router-dom"

export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(e => e.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {location.name}
                            {location.address}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.Redirect("/locations")}
                            className="card-link"></a>
                    </div>
                </div>
            </section>
        )
    }
}
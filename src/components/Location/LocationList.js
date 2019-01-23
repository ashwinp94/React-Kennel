import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.name}>
                    <h4>{location.name}</h4>
                        <h5>{location.address}</h5>
                        <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                    </div>
                )
            }
            </section>
        );
    }
}
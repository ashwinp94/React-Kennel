import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.name}>
                        {location.address}
                    </div>
                )
            }
            </section>
        );
    }
}
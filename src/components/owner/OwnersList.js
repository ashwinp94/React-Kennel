import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                    <div className = "class-body">
                    <h5 className = "card-title">
                        {owner.name}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <a href="#"onClick = {() => this.props.deleteOwner(owner.id)} className="card-link">Delete</a>
                    </h5>
                    </div>
                    </div>
                )
            }
            </section>
        );
    }
}
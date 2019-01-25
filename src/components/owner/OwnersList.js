import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="ownersButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/owners/new")}
                            className="btn btn-success">
                        Admit Owner
                    </button>
                </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                    <div className = "class-body">
                    <h5 className = "card-title">
                        {owner.name}
                        <h7>{owner.phone}</h7>
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <a href="#"onClick = {() => this.props.deleteOwner(owner.id)} className="card-link">Delete</a>
                    </h5>
                    </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        );
    }
}
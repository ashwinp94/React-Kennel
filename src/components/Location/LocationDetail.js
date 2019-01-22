// import React, { Component } from "react"


// export default class AnimalDetail extends Component {
//     render() {
//         /*
//             Using the route parameter, find the animal that the
//             user clicked on by looking at the `this.props.animals`
//             collection that was passed down from ApplicationViews
//         */
//         const location = this.props.location.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

//         return (
//             <section className="location">
//                 <div key={location.id} className="card">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             {location.name}
//                         </h4>
//                         <h6 className="card-title">{location.address}</h6>
//                         <a href="#"
//                             onClick={() => this.props.deleteAnimal(location.id)
//                                             .then(() => this.props.history.push("/location"))}
//                             className="card-link">Delete</a>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }
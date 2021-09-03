import React from 'react';

import { Component } from 'react';

class Reciept extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/booking/').then((result) => {
            result.json().then((data) => {
                console.log("data", data);
                this.setState({ items: data })
            })
        })
    }
    render() {
        return (
            <div className="form">

                {
                    this.state.items ?
                        this.state.items.map((item) =>
                        <div className="form-inner">
                            <div className="form-group">
                            <h1>Receipt</h1> 
                                <h5>Username: {item.username} </h5>
                                <h5>RoomNo: {item.room.number} </h5>
                                <p>CheckIn Time: {item.check_in} </p>
                                <p>CheckOut Time: {item.check_out} </p>
                            </div>
                            <button onClick="">Print</button>
                        </div>
                        

                        )
                        : null
                }     
            </div>
        );
    }
}
export default Reciept;


// import React from "react";

// export default class Reciept extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   async componentDidMount() {
//     const url = "http://localhost:8000/booking/";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.results, loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }

//     return (
//       <div>
//         <div>{this.state.person.name.user}</div>
//         {/* <div>{this.state.person.name.first}</div>
//         <div>{this.state.person.name.last}</div> */}
//         {/* <img src={this.state.person.picture.large} /> */}
//       </div>
//     );
//   }
// }

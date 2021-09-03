import React, { Component } from "react";

class Book extends Component {

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
    state  = {
        credentials: {user:'', room:''}
    }

    book = event => {
        console.log(this.state.credentials);
        fetch('http://localhost:8000/booking/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)  
        }).then( data => data.json())
        .then(
            data => {
                console.log(data);
            }
        ).catch( error => console.log(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div className="form">

                {
                    this.state.items ?
                        this.state.items.map((item) =>
                            <div className="form-inner">
                                <div className="form-group">
                                    <h1>Book Here</h1>
                                    <label>
                                        UserName:
                                        {/* <input type="text" name="user" value={this.state.credentials.username} onChange={this.inputChanged}></input> */}
                                        {/* <select value={item.user}>{item.user}</select> */}
                                        <select value={item}>
                                            <option value="A">{item.username}</option>
                                        </select>
                                        <br></br>
                                        {/* <h2>{item.number}.{item.category}with{item.beds}beds for {item.capacity} people </h2> */}
                                    </label>
                                    <label> Room No: 
                                     {/* <h2>Room No: {item.room}</h2> */}
                                     <select value={item}>
                                            <option value="A">{item.room.number}</option>
                                        </select>
                                    </label>
                                    <div className="form-group">
                                        <label>
                                            Check_in:
                                            {/* <input type="date" name="check_in" value={this.state.credentials.check_in} onChange={this.inputChanged}></input> */}
                                            <input type="date"></input>
                                        </label>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label>
                                            Check_Out:
                                            {/* <input type="date" name="check_out" value={this.state.credentials.check_out} onChange={this.inputChanged}></input> */}
                                            <input type="date"></input>
                                        </label>
                                    </div>
                                    <br></br>
                                </div>
                                <button onClick={this.book}>Book</button>
                            </div>


                        )
                        : null
                }
            </div>
            // <div className="form">
            //     <div className="form-inner">
            //     <h1>Book Here</h1>

            //     <div className="form-group">
            //         <label>
            //             User:
            //             <input type="text" name="user" value={this.state.credentials.username} onChange={this.inputChanged}></input>
            //         </label>
            //     </div>
            //     <br></br>
            //     <div className="form-group">
            //         <label>
            //         Check_in:
            //             <input type="date" name="check_in" value={this.state.credentials.check_in} onChange={this.inputChanged}></input>
            //         </label>
            //     </div>
            //     <br></br>
            //     <div className="form-group">
            //         <label>
            //         Check_Out:
            //             <input type="date" name="check_out" value={this.state.credentials.check_out} onChange={this.inputChanged}></input>
            //         </label>
            //     </div>
            //     <br></br>
            //     <div className="form-group">
            //         <label>
            //             Room:
            //             <input type="text" name="room" value={this.state.credentials.room} onChange={this.inputChanged}></input>
            //         </label>
            //     </div>
            //     <br></br>
            //     <button onClick={this.book}>Login</button>
            //     </div>
            // </div>
        );
    }
}

export default Book;

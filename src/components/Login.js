import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

    state  = {
        credentials: {username:'', password:''}
    }

    login = event => {
        console.log(this.state.credentials);
        fetch('http://localhost:8000/login', {
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
                <div className="form-inner">
                <h1>Login Here</h1>

                <div className="form-group">
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged}></input>
                    </label>
                </div>
                <br></br>
                <div className="form-group">
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged}></input>
                    </label>
                </div>
                <br></br>
                <button onClick={this.login}>Login</button>
                <p>Don't have an account? <Link to='/register'>Register Here</Link></p>
                </div>
            </div>
        );
    }
}

export default Login;

// import React from 'react';



// const Home = () => (

//     <div className='container'>
//         <div className='jumbotron mt-5'>
//             <h1 className='display-4'>Welcome to Restaurants</h1>
//             {/* <p className='lead'>It's Shopping time</p> */}
//             <hr className='my-4' />

//         </div>
// </div>
// );

// export default Home;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div className="">

                <div className="image">
                    <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                        alt="" height={800} width={2000}></img>
                </div>
                <div className=''>
                    <h1 className='display-4'>Welcome to Restaurants</h1>
                    <hr className='my-4' />
                </div>
                {/* <button onClick="">Login</button> */}
                        <p>Book Your Room Here after register <Link to='/register'>Register Here</Link></p>
            </div>
        );
    }
}

export default Login;

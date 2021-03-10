import React from 'react';
import './SideSignIn.css';
const SideSignIn = (props) => {
    return (
        <div className="side-signin-container">
            <h1>Hello, Friends!</h1>
            <h3>Enter personal details  and start journey with us </h3>
            <input type='button' value="Signup" className="btn-side-signup" onClick={()=>props.showSignUp()}/>
        </div>
    )
}

export default SideSignIn

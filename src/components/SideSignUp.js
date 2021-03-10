import React from 'react';
import './SideSignUp.css';
const SideSignUp = (props) => {
    return (
        <div className="side-signup-container"> 
            <h1>Welcome Back!</h1>
            <h4>To keep connected with us  please us login with uour personal info </h4>
            <input type='button' value="Signin" className="btn-side-signin" onClick={()=>props.showSignIn()}/>
        </div>
    )
}

export default SideSignUp


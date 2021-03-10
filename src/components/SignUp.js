import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className="signup-field-container">
            <h1>Creat Account</h1>
            <div className="main-avatar">
            <div className="ävatar">f</div>
            <div className="ävatar">G+</div>
            <div className="ävatar">in</div>
            </div>
            
            <p>or use these email for registration</p>
            <input type="text" placeholder="Name" id="name" name="name" />
            <input type="text" placeholder="Email" id="name" name="email" />
            <input type="password" placeholder="Password" id="name" name="email" />
            <input type='button' value="Signup" className="btn-signup"/>
        </div>
    )
}

export default SignUp

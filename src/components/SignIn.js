import React from 'react';
import './SignIn.css';
const SignIn = () => {
    return (
        <div className="signin-field-container">
            <h1>SignIn</h1>
            <div className="main-avatar">
            <div className="ävatar">f</div>
            <div className="ävatar">G+</div>
            <div className="ävatar">in</div>
            </div>
            <p>or use your account</p>
            <input type="text" placeholder="Email" id="name" name="name" />
            <input type="password" placeholder="Password" id="name" name="name" />
            <a>Forgot your password</a>
            <button className="btn-signin">Signin</button>
        </div>
    )
}

export default SignIn

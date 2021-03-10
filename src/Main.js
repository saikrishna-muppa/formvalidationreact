import React from 'react';
import SideSignIn from './components/SideSignIn';
import SideSignUp from './components/SideSignUp';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './Main.css'


export default function Main() {
  return (
    <div className="container">
      
       <div className="main-container">
       {/* <SideSignUp/>
        <SignUp/>  */}
          <SignIn/>
        <SideSignIn/>
       </div>
        
        
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';

export default function Signout(){
    const signoutStyle = {
        fontsize: "30px",
        textalign:"center",
        padding: "100px",
        color: "Red"
    }
    const Style2 = {
        fontsize: "20px",
        textalign:"center",
    }
    return(
        <div>
            <div style={signoutStyle}>
            <p>You have successfully signed out of your account!!</p>
            </div>
            <div className="container signin">
                <p style = {Style2}><Link to='/login'>Sign in</Link> again.</p>
            </div>
        </div>
      )
}

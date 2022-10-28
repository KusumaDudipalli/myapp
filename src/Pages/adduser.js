import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Leftsidenav from '../Components/leftsidenav'
import Upperbar from '../Components/upperbar';
// import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'

export default function AddUser(){
    const [uname, setUname] = useState("");
    const [psw, setPsw] = useState("");
    const [email, setEmail] = useState("");
    const [emailformat, setEmailformat] = useState(new RegExp(/\S+@\S+\.\S+/));

    function Store(){
        //check existing user
        	
            //var existinguser = localStorage.getItem(uname);
            
            if(uname && localStorage.getItem(uname)) {
                    alert("UserName already exists");
                //seperate the validations	
                }
            else if(!uname){
                alert("UserName should not be blank");
            }
            else if(!psw){
                alert("Password Should not be blank");
            }
            
            else if(!email.match(emailformat)){
                alert("Enter Valid Email");
            }
            else{
                
            localStorage.setItem(uname,JSON.stringify({psw:psw, email:email}));
            
            alert("user is registered");
            }
            
    }
    return(  
        <div>
            <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
            <Leftsidenav></Leftsidenav> 
            <div id="rightdisplay" class = "parent">
            
            <label for="uname"><b>User Name</b></label>
            <input type="text" placeholder="Enter User Name" name="uname" id="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
            
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <button type="button" class="registerbtn" onClick={Store}>Add User</button>

        </div>
        </div>
    )
}
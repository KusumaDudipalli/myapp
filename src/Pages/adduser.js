import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import Leftsidenav from '../Components/leftsidenav'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import axios from 'axios';

export default function AddUser(){
    const [uname, setUname] = useState("");
    const [psw, setPsw] = useState("");
    const [email, setEmail] = useState("");
    const[type, setType] = useState("User");
    const [emailformat, setEmailformat] = useState(new RegExp(/\S+@\S+\.\S+/));

    function Store(){
        //check existing user
        	
            //var existinguser = localStorage.getItem(uname);

            axios({
                method: 'get',
                url: `http://localhost:8080/api/user/${uname}`
              }).then((response)=>{
                const user = response.data[0];
                if(uname && user) {
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
                    axios({
                        method: 'post',
                        url: "http://localhost:8080/api/user",
                        data: {
                            "id":4,
                            "name":uname,
                            "password":psw,
                            "email":email,
                            "profile":type
                        }
                    }).then((response)=>{
                        console.log(response.data);
                        alert("user is registered");
                    });
                }
              });
            
            // if(uname && localStorage.getItem(uname)) {
            //         alert("UserName already exists");
            //     //seperate the validations	
            //     }
            // else if(!uname){
            //     alert("UserName should not be blank");
            // }
            // else if(!psw){
            //     alert("Password Should not be blank");
            // }
            
            // else if(!email.match(emailformat)){
            //     alert("Enter Valid Email");
            // }
            // else{
                
                
            //         localStorage.setItem(uname,JSON.stringify({psw:psw, email:email, type:type }));
                
            // // localStorage.setItem(uname,JSON.stringify({psw:psw, email:email, type: type}));
            
            // alert("user is registered");
            // }
            
    }


    return(  
        <div>
            <MyTemplate></MyTemplate>
            {/* <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
            <Leftsidenav></Leftsidenav>  */}
            <div id="rightdisplay" className = "parent">
            
            <label for="uname"><b>User Name</b></label>
            <input type="text" placeholder="Enter User Name" name="uname" id="uname" onChange={event => setUname(event.target.value)} required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={event => setPsw(event.target.value)} required />
            
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" onChange={event => setEmail(event.target.value)} required />

            <label for="category"><b>Choose a Profile:     </b></label>
                <select name="category" id="category" onChange={event => setType(event.target.value)}>  
                <option value="User" selected>User</option>
                <option value="Admin">Admin</option>
                </select>

            <button type="button" class="registerbtn" onClick={Store}>Add User</button>

        </div>
        </div>
    )
}
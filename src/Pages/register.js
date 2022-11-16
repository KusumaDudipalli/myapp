import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Register.css';
import Login from './login';
import axios from 'axios';

function Register(){
    const [uname, setUname] = useState("");
    const [psw, setPsw] = useState("");
    const [email, setEmail] = useState("");
    const[type, setType] = useState("User");
    const [emailformat, setEmailformat] = useState(new RegExp(/\S+@\S+\.\S+/));

    function Store(){
        //check existing 
        	
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
                    
                    
                // localStorage.setItem(uname,JSON.stringify({psw:psw, email:email, type:type }));
                
                
                
                

            
                
            
            // if(uname && user) {
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

            //     axios({
            //         method: 'post',
            //         url: `http://localhost:8080/api/user/${uname}`,
            //         data: {
            //             "id":1,
            //             "name":{uname},
            //             "password":{psw},
            //             "email":{email},
            //             "profile":{type}
            //         }
            //       }).then((response)=>{console.log(response.data)});
                 
                  
            // // localStorage.setItem(uname,JSON.stringify({psw:psw, email:email, type:type }));
               
            
            // alert("user is registered");
            // }
            
    }

return(
<div>
<form>
    <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="uname"><b>User Name</b></label>
        <input type="text" placeholder="Enter User Name" name="uname" id="uname" onChange={event => setUname(event.target.value)} required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={event => setPsw(event.target.value)} required />
        
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" onChange={event => setEmail(event.target.value)} required />

        <label htmlFor="category"><b>Choose a Profile:     </b></label>
                <select name="category" id="category" onChange={event => setType(event.target.value)}>  
                <option value="User" selected>User</option>
                <option value="Admin">Admin</option>
                </select>

        <hr />

        <p>By creating an account you agree to our Terms & Privacy.</p>
        <button type="button" className="registerbtn" onClick={Store}>Register</button>
    </div>

    <div className="container signin">
        <p>Already have an account? <Link to='/'>login</Link>.</p>
    </div>
  </form>
  </div>
  );
  }

  export default Register; 
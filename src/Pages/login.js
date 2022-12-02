import React, { useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { updateuser } from '../storeSlice/counterSlice'
import styles from './Login.css';
import Register from './register';
// import Loggedin from './loggedin';
import Dashboard from '../Pages/dashboard';
import axios from 'axios';
import classNames from "classnames";
// import styles from "./App.module.css";
import useMediaQuery from "../hooks/useMediaQuery";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPw, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  function Check(){
    // Send a POST request
axios({
  method: 'get',
  url: `http://localhost:8080/api/user/${userName}`
}).then((data)=>{
  console.log(data.data);
  // if(userName && localStorage.getItem(userName) && userPw == JSON.parse(localStorage.getItem(userName)).psw) {
  //   localStorage.setItem("currentUser", userName);
  //   navigate(`/dashboard/?name=${userName}&email=${JSON.parse(localStorage.getItem(userName)).email}&type=${JSON.parse(localStorage.getItem(userName)).type}`);
  //   // navigate("/loggedin?userName=" + userName + "&email=" + JSON.parse(localStorage.getItem(userName)).email);
   
  // }
  // else{
  //   alert("User Name or Password is incorrect");
  // }
  const user = data.data[0]
  if(userName && user && user.name && userPw == user.password) {
    sessionStorage.setItem("currentUser", userName);
   
    dispatch(updateuser({name:user.name,type:user.profile, email:user.email}));
    navigate(`/dashboard/?name=${userName}&email=${user.email}&type=${user.profile}`);
    // navigate("/loggedin?userName=" + userName + "&email=" + JSON.parse(localStorage.getItem(userName)).email);
   
  }
  else{
    alert("User Name or Password is incorrect");
  }
});
    
  }

  return (
    <div className={classNames([
      styles.layout,
      isMobile && styles.mobile,
      isTablet && styles.tablet,
    ])}>
      <h2>Login Form</h2>

        <form>
            <div className="imgcontainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJn6tGdKeb7cyTH3WSrmnkseuMtt1EMYfd0w&usqp=CAU" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="name"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="name" id="lname" onChange={event => setUserName(event.target.value)}  required />

              <label htmlFor="pw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="pw" id="lpw" onChange={event => setPassword(event.target.value)} required />
                  
              <button type="button" id="verify" onClick={Check}>Login</button>
            </div>

            <div className="container">
              <div className="Register">
              <Link to='/register'>Register</Link>
              </div>
            </div>
        </form>

    </div>
  );
}

export default Login;

import React, { useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Login.css';
import Register from './register';
import Loggedin from './loggedin';


function Login() {
  const [userName, setUserName] = useState("");
  const [userPw, setPassword] = useState("");
  
  const navigate = useNavigate();

  function Check(){
    if(userName && localStorage.getItem(userName) && userPw == JSON.parse(localStorage.getItem(userName)).psw) {
      localStorage.setItem("currentUser", userName);
      navigate(`/loggedin/?name=${userName}&email=${JSON.parse(localStorage.getItem(userName)).email}`);
      // navigate("/loggedin?userName=" + userName + "&email=" + JSON.parse(localStorage.getItem(userName)).email);
     
		}
    else{
      alert("User Name or Password is incorrect");
    }
  }

  return (
    <div>
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

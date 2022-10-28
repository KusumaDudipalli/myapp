import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import Upperbar from '../Components/upperbar';
import Leftsidenav from '../Components/leftsidenav'
// import MyTemplate from '../templates/myTemplate'
import './loggedin.css';
import { useLocation } from 'react-router-dom';


function Loggedin(props) {
    
    // const {name,email} = useParams();

    const {search} = useLocation();

    var tempstr = search.replace("?","");

    var parms = tempstr.split('&');
    var querypar = {};

    parms.forEach(element =>{
      var key = "";
      var newtemparr = element.split("=");
      key = newtemparr[0];
      querypar[key] = newtemparr[1];


})

    const objName = querypar["name"];
    const objEmail = querypar["email"];
    console.log(`objName is ${objName}`);
    console.log(`objEmail is ${objEmail}`);

    const name = new URLSearchParams(search).get("name");
    const email = new URLSearchParams(search).get("email");

    console.log(search);
    console.log(tempstr);
    console.log(parms);
    console.log(name);
    console.log(email);
    return (

      // <MyTemplate userName = {name}  email = {email}>

      // </MyTemplate>

      <div>
        <Upperbar userName = {name}  email = {email}></Upperbar>
        {/* <Upperbar userName = {props.location.userName}  email = {props.location.email}></Upperbar> */}
        <Leftsidenav></Leftsidenav>
      </div>
    );
  }
  
  export default Loggedin;
  
import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Upperbar from '../Components/upperbar';
import Leftsidenav from '../Components/leftsidenav'
import '../Pages/loggedin.css';


function MyTemplate(props) {
  
    return (
      <div>
        <Upperbar userName = {props.userName}  email = {props.email}></Upperbar>
        {/* <Upperbar userName = {props.location.userName}  email = {props.location.email}></Upperbar> */}
        <Leftsidenav userName = {props.userName}  email = {props.email}></Leftsidenav>
      </div>
    );
  }
  
  export default MyTemplate;
  
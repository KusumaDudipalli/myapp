import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux'
import Upperbar from '../Components/upperbar';
import Leftsidenav from '../Components/leftsidenav'
import Leftsidenavuser from '../Components/leftsidenavuser'
import '../Pages/loggedin.css';


function MyTemplate(props) {

  const counter = useSelector(state => state.counter.cartCount);
  const cartList = useSelector(state => state.counter.cartList);
  const name = useSelector(state => state.counter.username);
  const email = useSelector(state => state.counter.email);
  const type = useSelector(state => state.counter.type);


  function Getleftsidenav(){
    if (type == "User"){
      return(
        <Leftsidenavuser userName = {name}  email = {email}></Leftsidenavuser>
      )
    }
    else if (type == "Admin"){
      return(
        <Leftsidenav userName = {name}  email = {email}></Leftsidenav>
      )
    }
    
  }

  // if(!props.counter){
    
  // }
    return (
      <div>
        <Upperbar userName = {name}  email = {email} counter = {counter} cartItems = {cartList}></Upperbar>
        {/* <Upperbar userName = {props.location.userName}  email = {props.location.email}></Upperbar> */}
        {/* <Leftsidenav userName = {props.userName}  email = {props.email}></Leftsidenav> */}
        <Getleftsidenav></Getleftsidenav>
      </div>
    );
  }
  
  export default MyTemplate;
  
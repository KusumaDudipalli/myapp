import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Leftsidenav from '../Components/leftsidenav'
import Upperbar from '../Components/upperbar';
// import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'

export default function Cart(){

    return(  
        <div>
        <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
        <Leftsidenav></Leftsidenav> 
        <div id="rightdisplay" className = "parent">
		
			    <p>For any issues, please <a href = "mailto:dudikusuma442@gmail.com">contact us</a></p>
	
		</div>
        </div>
    )
}
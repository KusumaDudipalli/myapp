import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import Leftsidenav from '../Components/leftsidenav'
// import Leftsidenav from '../Components/navigation'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'

export default function Contacts(){
    const ContactStyle = {
        fontsize: "20px",
    }
    return(  
        <div>
         <MyTemplate></MyTemplate>   
        {/* <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
        <Leftsidenav></Leftsidenav>  */}
        <div id="rightdisplay" className = "parent">
		
			    <p style = {ContactStyle} >For any issues, please <a href = "mailto:dudikusuma442@gmail.com">contact us</a></p>
	
		</div>
        </div>
    )
}
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Leftsidenav from '../Components/leftsidenav'
import Upperbar from '../Components/upperbar';
// import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'

export default function AddReport(){
    

    function AddReport(){
        var alpha = new RegExp(/^[a-zA-Z() ]+$/)
        var existingreportname = "False";
        
        var reportname = document.getElementById('reportname').value;
            var reporttype = document.getElementById('reporttype').value;
            var priority = document.getElementById('priority').value;
            
            var existingreports = JSON.parse(localStorage.getItem("existingReports"));
            //var existinguser = localStorage.getItem(uname);
            
            if (existingreports != null){
            existingreports.forEach(elem => {
            if (reportname == elem.reportname){
                existingreportname = "True";
            }		
                
            });
            }
            
            if(reportname != "" && existingreportname == "True") {
                    alert("Report already exists");
                //seperate the validations	
                }
            else if(reportname == ""){
                alert("Report Name should not be blank");
            }
            else if(reporttype == ""){
                alert("Report Type Should not be blank");
            }
            
            else if(priority == ""){
                alert("priority should not be blank");
            }
            else if(reportname.match(alpha) == null){
                alert("Enter Alphabets only in Report name");
            }
            else if(reporttype.match(alpha) == null){
                alert("Enter Alphabets only in Report Type");
            }
            else{
                var now = new Date();
                var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
                var report = {
                    reportname:reportname,
                    reporttype:reporttype,
                    priority:priority,
                    createdtime:newtime
                }       
                var Reports = JSON.parse(localStorage.getItem("existingReports"));
                
                if(!Reports){Reports = []}
                Reports.push(report);
            localStorage.setItem("existingReports",JSON.stringify(Reports));
            alert("Added Report");
            }
            
        }

    return(  
        
        <div>
            <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
            <Leftsidenav></Leftsidenav> 
            <div id="rightdisplay" class = "parent">
            
                <label for="reportname"><b>Report Name</b></label>
                <input type="text" placeholder="Enter Report Nmae" name="reportname" id="reportname" required />

                <label for="reporttype"><b>Type</b></label>
                <input type="text" placeholder="Enter Report Type" name="reporttype" id="reporttype" required />
                
                <label for="priority"><b>Priority</b></label>
                <input type="number" placeholder="Enter Report Priority" name="priority" id="priority" required />
                    
                <button type="button" id="AddReport" onClick={AddReport}>Add Report</button>
        
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './dashboard.css';
import Leftsidenav from '../Components/leftsidenav'
import Upperbar from '../Components/upperbar';
// import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useLocation } from 'react-router-dom';

export default function Dashboard(){
    var userName = localStorage.getItem("currentUser");
    const {search} = useLocation();
    const name = new URLSearchParams(search).get("name");

    console.log(search);
    console.log(name);

    var existinguser = JSON.parse(localStorage.getItem(userName));
    var storedEmail = existinguser.email;

    // // document.getElementsByClassName("unbtn").innerHTML = userName;
    // document.querySelector(".unbtn").innerHTML = userName;
    // document.getElementById("uemail").innerHTML = storedEmail;

    // function Showdetails() {
    // document.getElementById("dropdown-content").style.display = "block";
    // }

    // function Showleftmenu() {
    // document.getElementById("left-dropdown-content").style.display = "block";
    // }

    // // Close the dropdown if the user clicks outside of it
    // window.onclick = function(event) {
    // if (!event.target.matches('.unbtn')) {
    //     document.getElementById("dropdown-content").style.display = "none";    
    // }
    // if (!event.target.matches('#leftsidenav')) {
    //     document.getElementById("left-dropdown-content").style.display = "none";    
    // }
    
    // }

    
    // function Signout(){
    // localStorage.removeItem("currentUser");
    // }

        
            
    const [existingreports, setexistingreports] = useState(JSON.parse(localStorage.getItem("existingReports")));
    if (existingreports && existingreports.length > 0) {
            var temparr = [];
            temparr = [...existingreports].sort((a, b) => a.priority - b.priority).slice(0, 4)
            // existingreports.forEach(elem => {
            // temparr.push(elem.priority)				
            // });
            var totalreports = existingreports.length
        }
                
    
                
    // if (totalreports == 1){
    //     document.getElementById("Reportname1").innerHTML = existingreports[0].reportname;	
    //     document.getElementById("Reporttype1").innerHTML = existingreports[0].reporttype;
    //     document.getElementById("Createddate1").innerHTML = existingreports[0].createdtime;			
    // }
    // else if(totalreports > 1){
    //     var firstind = getprioityind();
        
    //     document.getElementById("Reportname1").innerHTML = existingreports[firstind].reportname;	
    //     document.getElementById("Reporttype1").innerHTML = existingreports[firstind].reporttype;
    //     document.getElementById("Createddate1").innerHTML = existingreports[firstind].createdtime;
        
    //     var secondind = getprioityind();
        
    //     document.getElementById("Reportname2").innerHTML = existingreports[secondind].reportname;	
    //     document.getElementById("Reporttype2").innerHTML = existingreports[secondind].reporttype;
    //     document.getElementById("Createddate2").innerHTML = existingreports[secondind].createdtime;
        
    //     var thirdind = getprioityind();
        
    //     document.getElementById("Reportname3").innerHTML = existingreports[thirdind].reportname;	
    //     document.getElementById("Reporttype3").innerHTML = existingreports[thirdind].reporttype;
    //     document.getElementById("Createddate3").innerHTML = existingreports[thirdind].createdtime;
        
    //     var fourthind = getprioityind();
        
    //     document.getElementById("Reportname4").innerHTML = existingreports[fourthind].reportname;	
    //     document.getElementById("Reporttype4").innerHTML = existingreports[fourthind].reporttype;
    //     document.getElementById("Createddate4").innerHTML = existingreports[fourthind].createdtime;
    // }
                
    // function getprioityind(){
        
        
        
            
    //         var max = Math.max(...temparr);
    //         var greatindex = temparr.indexOf(max.toString());
            
    //         temparr[greatindex] = -1;
            
    //         return greatindex;
    // }

    // var table = document.getElementById("reporttable");
    // existingreports.forEach((element, index) => { 

    // var row = table.insertRow();

    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);

    // cell1.innerHTML = element.reportname;
    // cell2.innerHTML = element.reporttype;
    // cell3.innerHTML = element.priority;
    // cell4.innerHTML = element.createdtime;
    // })

    function TopReports(){

        return(
            <>
					{existingreports && temparr.map((report)=>{
                        return(
                            <div  className = "report">
                                <table>
                                    <tr>
                                        <td>Report Name:</td>
                                        <td>{report.reportname}</td>
                                    </tr>
                                    <tr>
                                        <td>Report Type:</td>
                                        <td>{report.reporttype}</td>
                                    </tr>
                                    <tr>
                                        <td>Created Date:</td>
                                        <td>{report.createdtime}</td>
                                    </tr>  
                                </table> 
                            </div>                         
                        )
                    })}
            </>
        )
    } 

    function TableBody(){
        return(
            <>
					{existingreports && existingreports.map((report)=>{

                        return(
                            <tr>
                                <td>{report.reportname}</td>
                                <td>{report.reporttype}</td>
                                <td>{report.priority}</td>
                                <td>{report.createdtime}</td>
                            </tr>
                        )
                    })}
            </>
        )
    }            
        




    return(  
        <div>
        <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
        <Leftsidenav></Leftsidenav>
        <div id="rightdisplay" className = "parent">
			<div id = "Dashboards">
            <TopReports></TopReports>
            </div>
        
        {/* <div id="rightdisplay" class = "parent">
			<div id = "Dashboards">
				<div id = "1" class = "report">
					<table>
						<tr>
							<td>Report Name:</td>
							<td id = "Reportname1"></td>
						</tr>
						<tr>
							<td>Report Type:</td>
							<td id = "Reporttype1"></td>
						</tr>
						<tr>
							<td>Created Date:</td>
							<td id = "Createddate1"></td>
						</tr>
					</table>
				</div>
				<div id = "2" class = "report">
					<table>
						<tr>
							<td>Report Name:</td>
							<td id = "Reportname2"></td>
						</tr>
						<tr>
							<td>Report Type:</td>
							<td id = "Reporttype2"></td>
						</tr>
						<tr>
							<td>Created Date:</td>
							<td id = "Createddate2"></td>
						</tr>
					</table>
				</div>
				<div id = "3" class = "report">
					<table>
						<tr>
							<td>Report Name:</td>
							<td id = "Reportname3"></td>
						</tr>
						<tr>
							<td>Report Type:</td>
							<td id = "Reporttype3"></td>
						</tr>
						<tr>
							<td>Created Date:</td>
							<td id = "Createddate3"></td>
						</tr>
					</table>
				</div>
				<div id = "4" class = "report">
					<table>
						<tr>
							<td>Report Name:</td>
							<td id = "Reportname4"></td>
						</tr>
						<tr>
							<td>Report Type:</td>
							<td id = "Reporttype4"></td>
						</tr>
						<tr>
							<td>Created Date:</td>
							<td id = "Createddate4"></td>
						</tr>
					</table>
				</div>
			</div> */}
			 <div className="tableFixHead">
				<table id = "reporttable" >
			  
				{/* <!-- Table head content --> */}
				<thead>
					<tr>
						<th>Report name</th>
						<th>Type</th>
						<th>Priority</th>
						<th>Created Date</th>
					</tr>
				</thead>
				  
				{/* <!-- Table body content --> */}
				<tbody id = "tablecontent">
					<TableBody></TableBody>
				</tbody>
			</table>
		</div>
	</div>
    </div>
    )
}
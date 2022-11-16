import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import { useDispatch } from 'react-redux'
// import { updateuser } from '../storeSlice/counterSlice'
import './dashboard.css';
// import Leftsidenav from '../Components/leftsidenav'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateuser } from '../storeSlice/counterSlice'


export default function Dashboard(props){
	const {search} = useLocation();
	const name = new URLSearchParams(search).get("name");
    const email = new URLSearchParams(search).get("email");
    const type = new URLSearchParams(search).get("type");
    var userName = localStorage.getItem("currentUser");
	const dispatch = useDispatch();

	if(name){
		sessionStorage.setItem("currentUser", name);
    dispatch(updateuser({username:name,email:email, type: type}));
	
	}
    // console.log(search);

    var existinguser = JSON.parse(localStorage.getItem(userName));
    // var storedEmail = existinguser.email;        
            
    const [existingreports, setexistingreports] = useState(JSON.parse(localStorage.getItem("existingReports")));
    if (existingreports && existingreports.length > 0) {
            var temparr = [];
            temparr = [...existingreports].sort((a, b) => a.priority - b.priority).slice(0, 4)
            // existingreports.forEach(elem => {
            // temparr.push(elem.priority)				
            // });
            var totalreports = existingreports.length
        }
                
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
        <MyTemplate></MyTemplate>
        {/* <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
        <Leftsidenav></Leftsidenav> */}
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
import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Leftsidenav from '../Components/leftsidenav'
import Upperbar from '../Components/upperbar';
// import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItem , deleteItem } from '../storeSlice/counterSlice'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Repository(){
    let username = "Javascript"
    // const [counter, setCounter] = useState(0)
    const [jobStatus, setJobStatus] = useState("initiated") 
    // const [cartList, setCartList] = useState([]);
    const [employeeList,setEmployeeList] = useState([{
      id: 1,
      name: "Item1",
      dept: "Department1"
    },
    {
      id: 2,
      name: "Item2",
      dept: "Department2"
    },
    {
      id: 3,
      name: "Item3",
      dept: "Department3"
    },
    {
      id: 4,
      name: "Item4",
      dept: "Department3"
    }])

    const counter = useSelector(state => state.counter.cartCount);
    const cartList = useSelector(state => state.counter.cartList);
    const dispatch = useDispatch()

    useEffect(() => {}, [counter]);

    const handleDelete = (event) => {
      console.log(event.currentTarget.dataset.id)
      dispatch(deleteItem({employeeList:employeeList,counter:counter, event:event}));
    //   var delflag = "False";
      
    //   if(cartList.length == 0){
    //     alert("No items were present in cart");
    //   }
    //   else{
    //     for(const employee of cartList){
    //         // if(employee.id == event.currentTarget.dataset.id)
    //         // {
    //         //     delflag = "True";
    //         //     // setCounter(counter-1);
    //         //     employee.ItemCount = employee.ItemCount -1;
    //         //     // if (employee.ItemCount == 0){
    //         //     //     setCartList(cartList.filter((employee) => {
    //         //     //         if(employee.id != event.currentTarget.dataset.id)
    //         //     //           return employee;
    //         //     //         }))
    //         //     // }
    //         // }
    // }
    //   }

      // setEmployeeList(employeeList.filter((employee) => {
      //   if(employee.id != event.target.dataset.id)
      //   return employee;
      // }))
    
    }
    const handleAdd = (event) => {
        dispatch(addItem({employeeList:employeeList,counter:counter, event:event}));
        
        // setCounter(counter+1);
        // var addflag = "False";

           
                
        //     if(cartList.length != 0){
        //         for(const employee of cartList){
        //             if(employee.id == event.currentTarget.dataset.id)
        //             {
        //                 addflag = "True";
        //                 employee.ItemCount = employee.ItemCount +1;
        //                 dispatch(addItem(employee));
        //             }
        //     }}
                    
        //         if(addflag == "False"){
        //             for(const emp of employeeList){
        //                 if(emp.id == event.currentTarget.dataset.id)
        //                     {
        //                         cartList.push({id:emp.id, name:emp.name, dept:emp.dept, ItemCount:1 });

        //                         dispatch(addItem({emp:emp,counter:counter}));
                                    
        //                     }
        //             } 
        //         }
                
                }
    

    return(  
        <div>
        <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email} counter = {counter} cartItems = {cartList}></Upperbar>
        <Leftsidenav></Leftsidenav> 
        <div id="rightdisplay" className = "parent">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    employeeList.map((employee) => {
                    return (
                        <tr key={"employee-id-"+employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.dept}</td>
                            <td>
                                {/* <button data-id={employee.id} onClick={handleAdd}>Add</button> */}
                                <span data-id={employee.id} onClick={handleAdd}>
                                <AddIcon/>
                                </span>
                                <span data-id={employee.id} onClick={handleDelete}>
                                <DeleteIcon/>
                                </span>
                                
                                {/* <button data-id={employee.id} onClick={handleDelete}>Delete</button> */}
                            </td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        
        

            
        </div>
    </div>
    )
}
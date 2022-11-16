import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
// import Leftsidenav from '../Components/leftsidenav'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItem , deleteItem, updateElectronics, updateCart } from '../storeSlice/counterSlice'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { HOST, ELECTRONICS_URI } from '../Constants/constants';
import store from '../store';

export default function Electronics(){
  const username = sessionStorage.getItem("currentUser");
    // const [counter, setCounter] = useState(0)
    const [jobStatus, setJobStatus] = useState("initiated") 
    // const [cartList, setCartList] = useState([]);
    // const [employeeList,setEmployeeList] = useState([{
    //   id: 1,
    //   name: "Piano",
    //   type: "toys",
    //   price: "50$",
    //   desc: "use it for your kid"
    // },
    // {
    //   id: 2,
    //   name: "Monkey",
    //   type: "toys",
    //   price: "10$",
    //   desc: "use it for your kid"
    // },
    // {
    //   id: 3,
    //   name: "Guitar",
    //   type: "toys",
    //   price: "20$",
    //   desc: "use it for your kid"
    // },
    // {
    //   id: 4,
    //   name: "Walker",
    //   type: "toys",
    //   price: "30$",
    //   desc: "use it for your kid"
    // }])

    // const counter = useSelector(state => state.counter.cartCount);
    // const cartList = useSelector(state => state.counter.cartList);
    // const Toys = useSelector(state => state.counter.Toys);
    const [electronics, setElectronics ]= useState([]);
    var [cartVal, setCartVal] = useState([]);
    let counterSlice = store.getState().counter;
    store.subscribe(()=>{counterSlice = store.getState().counter});
    const dispatch = useDispatch()


    useEffect(() => {
      axios({
        method: 'get',
        url: HOST + ELECTRONICS_URI
      }).then((response)=>{
        setElectronics(response.data);
        dispatch(updateElectronics({electronics:response.data}));
      })
    }, []);

    
    const handleAdd = (event) => {
        // dispatch(addItem({itemList:electronics, id:event.currentTarget.dataset.id}));
        var addFlag = "False";
      var newitem = {};

      cartVal = [...counterSlice.cartList];

      cartVal = cartVal.map(element => {
        if(element.itemname == event.currentTarget.dataset.id && username == element.username){
          var now = new Date();
          var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
          newitem = {
            "itemname": element.itemname,
            "itemtype": element.itemtype,
            "itemprice":element.itemprice,
            "itemdesc": element.itemdesc,
            "itemimg": element.itemimg,
            "itemcount": element.itemcount+1,
            "orderedtime": newtime,
            "username" : element.username
          }
          // setCartCount(cartCount + 1);
          // cartCount = counterSlice.cartCount+1;
          axios({
            method: 'put',
            url: `http://localhost:8080/cart/cartitem/${event.currentTarget.dataset.id}`,
            data: newitem
        }).then((response)=>{
            console.log(response.data);
            // dispatch(updateCart({cartList:cartVal,counter:cartCount}));
            // alert("Item is added");
        });
        addFlag = "True";
        return newitem;
        }
        else return element;
      })

      if (addFlag == "False"){
          var now = new Date();
          var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
          var newitem = {}

          counterSlice.electronics.forEach((elem) => {
            if (elem.itemname == event.currentTarget.dataset.id){
              newitem = {
                "itemname": elem.itemname,
                "itemtype": "toys",
                "itemprice":elem.itemprice,
                "itemdesc": elem.itemdesc,
                "itemimg": elem.itemimg,
                "itemcount": 1,
                "orderedtime": newtime,
                "username" : username
              }
              // cartVal = [...counterSlice.cartList];
              cartVal.push(newitem);
              // cartCount = counterSlice.cartCount + 1
              // setCartCount(cartCount + 1);
              addFlag = "True";
              axios({
                method: 'post',
                url: "http://localhost:8080/cart/item",
                data: newitem
            }).then((response)=>{
                console.log(response.data);
            });
            }
          })
         

      }
      if (addFlag == "True")
      dispatch(updateCart({ cartList: cartVal,cartCount: counterSlice.cartCount + 1}));
                
                }
    

    return(  
        <div>
          <MyTemplate></MyTemplate>
        <div id="rightdisplay" className = "parent">
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    counterSlice.electronics.map((toy) => {
                      return (
                          <tr key={"employee-id-"+toy.itemname}>
                              {/* <td>{employee.id}</td> */}
                               {/* <td>{toy.itemimg}</td>  */}
                              {/* <td></td> */}
                              <td>{toy.itemname}</td>
                              <td>{toy.itemprice}</td>
                              <td>{toy.itemdesc}</td>
                              <td>
                                  {/* <button data-id={employee.id} onClick={handleAdd}>Add</button> */}
                                  <span data-id={toy.itemname} onClick={handleAdd}>
                                  <AddIcon/>
                                  </span>
                                  {/* <span data-id={toy.itemname} onClick={handleDelete}>
                                  <DeleteIcon/>
                                  </span> */}
                                  
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
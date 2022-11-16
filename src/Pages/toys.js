import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
// import Leftsidenav from '../Components/leftsidenav'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItem , deleteItem, updateCart, updateToys } from '../storeSlice/counterSlice'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { HOST, TOYS_URI, CART_USER_URI } from '../Constants/constants';
import store from '../store';

export default function Toys(){
   
  const username = sessionStorage.getItem("currentUser");
    var [cartCount, setCartCount] = useState(0);
    const [toys, setToys ]= useState([]);
    // const Toys = useSelector(state => state.counter.Toys);
    var [cartVal, setCartVal] = useState([])
    const dispatch = useDispatch();
    let counterSlice = store.getState().counter;
    store.subscribe(()=>{counterSlice = store.getState().counter});

    useEffect(() => {

      axios({
        method: 'get',
        url: HOST + TOYS_URI
      }).then((response)=>{
        setToys(response.data);
        dispatch(updateToys({toys:response.data}));
      });
      // axios({
      //   method: 'get',
      //   url: HOST + TOYS_URI
      // }).then((response)=>{
      //   // setToys(response.data);
      //   dispatch(updateToys({toys:response.data}));
      // });
     
    //   axios({
    //     url: HOST + "inventory/image/download.jpg", //your url
    //     method: 'GET',
    //     responseType: 'blob', // important
    // }).then((response) => {
    //     // create file link in browser's memory
    //     const href = URL.createObjectURL(response.data);
    
    //     // create "a" HTML element with href to file & click
    //     const link = document.createElement('a');
    //     link.href = href;
    //     link.setAttribute('download', 'file.jpg'); //or any other extension
    //     document.body.appendChild(link);
    //     link.click();
    
    //     // clean up "a" element & remove ObjectURL
    //     document.body.removeChild(link);
    //     URL.revokeObjectURL(href);
    // });
    }, []);

    

    
    const handleAdd = (event) => {
      // var counter = useSelector((state) => state.counter.cartCount);
      // const cartList = useSelector((state) => state.counter.cartList);

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

          counterSlice.toys.forEach((elem) => {
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
    };
    

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
                    counterSlice.toys.map((toy) => {
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
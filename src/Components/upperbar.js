import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './upperbar.css';
import Signout from '../Pages/signout';
// import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { addItem , deleteItem, updateCart, updateToys, updateuser, updateElectronics } from '../storeSlice/counterSlice'
import axios from 'axios';
import { HOST, CART_USER_URI, TOYS_URI, USER_URI, ELECTRONICS_URI } from '../Constants/constants';
import store from '../store';

export default function Upperbar(props){

    const username = sessionStorage.getItem("currentUser");
    axios({
        method: 'get',
        url: HOST + USER_URI + username 
      }).then((response)=>{
        var email = response.data[0].email;
        var type = response.data[0].profile;
        dispatch(updateuser({username:username,email:email, type: type}));
      });
   var [cartVal, setCartVal] = useState([])
    var [cartCount, setCartCount] = useState(0);
    let counter = store.getState().counter;
    store.subscribe(()=>{counter = store.getState().counter});
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        axios({
          method: 'get',
          url: HOST + CART_USER_URI + username 
        }).then((response)=>{
            //do dispatch
            var temparr = []
            response.data.forEach((elem) => temparr.push(elem))
            // setCartVal([...response.data]);
            var counter = 0;
            temparr.forEach(elem => {
                counter = counter + elem.itemcount;
                });
                setCartCount(counter);
                dispatch(updateCart({cartList:temparr,cartCount:counter}));
        });
        // axios({
        //     method: 'get',
        //     url: HOST + TOYS_URI
        //   }).then((response)=>{
        //     // setToys(response.data);
        //     dispatch(updateToys({toys:response.data}));
        //   });
        //   axios({
        //     method: 'get',
        //     url: HOST + ELECTRONICS_URI
        //   }).then((response)=>{
        //     // setElectronics(response.data);
        //     dispatch(updateElectronics({electronics:response.data}));
        //   })
    }, []);

    // cartcounter

    const handleAdd = (event) => {
        // dispatch(addItem({employeeList:cartVal,counter:cartCount, event:event}));

        var addFlag = "False";
      var newitem = {};

      cartVal = counter.cartList.map(element => {
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
          cartCount = counter.cartCount+1;
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

     
      if (addFlag == "True")
    //   cartList = [...cartVal];
    //     cartcounter = cartCount;
      dispatch(updateCart({ cartList: cartVal,cartCount: cartCount}));
    }

    const handleDelete = (event) => {
        // console.log(event.currentTarget.dataset.id)
        // dispatch(deleteItem({employeeList:cartVal,counter:cartCount, event:event}));
        var delFlag = "False";
        var newitem = {};
        var itemcount = 0;

        counter.cartList.forEach(element => {
            if(element.itemname == event.currentTarget.dataset.id && username == element.username){
                 itemcount = element.itemcount -1;
            }
        })

        if (itemcount == 0){
            axios({
              method: 'delete',
              url: `http://localhost:8080/cart/${event.currentTarget.dataset.id}`,
          }).then((response)=>{
              console.log(response.data);
              // delFlag = "True";
          }); 
          cartVal = counter.cartList.filter(element => {
            if(element.itemname != event.currentTarget.dataset.id || username != element.username){
               return element; 
            }
          });
          delFlag = "True";
          }
        else if (itemcount > 0) {
            var now = new Date();
            var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
            cartVal = counter.cartList.map(element => {
                if(element.itemname == event.currentTarget.dataset.id && username == element.username){
                  newitem = {
                    "itemname": element.itemname,
                    "itemtype": element.itemtype,
                    "itemprice":element.itemprice,
                    "itemdesc": element.itemdesc,
                    "itemimg": element.itemimg,
                    "itemcount": element.itemcount-1,
                    "orderedtime": newtime,
                    "username" : element.username
                  }
                  // setCartCount(cartCount + 1);
                //   cartCount = counter.cartCount+1;
                  axios({
                    method: 'put',
                    url: `http://localhost:8080/cart/cartitem/${event.currentTarget.dataset.id}`,
                    data: newitem
                }).then((response)=>{
                    console.log(response.data);
                    // dispatch(updateCart({cartList:cartVal,counter:cartCount}));
                    // alert("Item is added");
                });
                delFlag = "True";
                return newitem;
                }
                else return element;
            });

        }

        if (delFlag == "True")
        dispatch(updateCart({ cartList: cartVal,cartCount: (counter.cartCount-1)}));

    }
    //     cartVal = counter.cartList.filter(element => {
    //       if(element.itemname == event.currentTarget.dataset.id && counter.username == element.username){
    //         // cartCount = cartCount-1;
    //         var itemcount = element.itemcount -1;
  
    //         if (itemcount == 0){
    //           axios({
    //             method: 'delete',
    //             url: `http://localhost:8080/cart/${event.currentTarget.dataset.id}`,
    //         }).then((response)=>{
    //             console.log(response.data);
    //             // delFlag = "True";
    //         }); 
    //         delFlag = "True";
    //         }
    //       else {
    //         var now = new Date();
    //         var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
    //          newitem = {
    //           "itemname": element.itemname,
    //           "itemtype": element.itemtype,
    //           "itemprice":element.itemprice,
    //           "itemdesc": element.itemdesc,
    //           "itemimg": element.itemimg,
    //           "itemcount": element.itemcount-1,
    //           "orderedtime": newtime,
    //           "username" : element.username
    //         }
            
    //         axios({
    //           method: 'put',
    //           url: `http://localhost:8080/cart/cartitem/${event.currentTarget.dataset.id}`,
    //           data: newitem
    //       }).then((response)=>{
    //           console.log(response.data);
    //           // dispatch(updateCart({cartList:cartVal,counter:cartCount}));
    //           // alert("Item is added");
    //       });
    //       delFlag = "True";
    //       return newitem;
    //       }
  
    //     }
    //       else{ 
    //         return element;
    //       }
    //     })
  
    //     if (delFlag == "True")
    //     dispatch(updateCart({ cartList: cartVal,cartCount: (counter.cartCount-1)}));

    // }

    function showdetails(){
        document.getElementById("dropdown-content").style.display = "block";
    }

    // function Showcart(){
    //     document.getElementById("cartcontent").style.display = "block";
    // }
    function Signout(){
        localStorage.removeItem(props.userName);
        }
    
        const [isOpen, setIsOpen] = useState(false);
 
        const togglePopup = () => {
            setIsOpen(!isOpen);
        }

    
    
        
        
        console.log(props.cartItems);
        // useEffect(() => {                
        //     setCartVal(props.cartItems)
        //     }, [props])

        const CartPopup = props => {
            return (
              <div className="popup-box">
                <div className="box">
                  <span className="close-icon" onClick={togglePopup}>x</span>
                  <Cartvalue></Cartvalue>
                </div>
              </div>
            );
          };
           

        function Cartvalue(){
            // setCartVal(props.cartItems);   
            return(
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>Description</th>
                                <th></th>
                            </tr> 
                        </thead>

                        {counter.cartList && counter.cartList.map((item)=>{
                            return(       
                                        <tbody>
                                            <tr>
                                                <td>{item.itemname}</td>
                                                <td>{item.itemprice}</td>
                                                <td>{item.itemcount}</td>
                                                <td>{item.itemdesc}</td>
                                                <span data-id={item.itemname} onClick={handleAdd}>
                                                    <AddIcon/>
                                                </span>
                                                <span data-id={item.itemname} onClick={handleDelete}>
                                                    <DeleteIcon/>
                                                </span>
                                            </tr>
                                        </tbody>
                            )
                        })}
                 </table>
             )
             }
    return(
        <div id = "upperbar">
		<p id = "upperleft">My Statistics</p>
        <div id = "rightcontent">
            <div id = "upperright">
                    <button onClick={showdetails} className="unbtn">{username}</button>
                    <div id="dropdown-content" className="dropdown-content">
                    
                        <a id="uemail" href={"mailto:"+ counter.email}>{counter.email}</a>
                        <Link to='/signout' onClick="return {Signout};">Signout</Link>

                    </div>
            </div>
            <div id = "upperright1">
                    <button onClick={togglePopup} className="unbtn">Cart {counter.cartCount}</button>
                    {isOpen && <CartPopup/>}

            </div>
        </div>
	</div>
    )

}
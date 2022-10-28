import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './upperbar.css';
import Signout from '../Pages/signout';
// import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { addItem , deleteItem } from '../storeSlice/counterSlice'

export default function Upperbar(props){
    const counter = useSelector(state => state.counter.cartCount);
    const cartList = useSelector(state => state.counter.cartList);
    const dispatch = useDispatch();

    const handleAdd = (event) => {
        dispatch(addItem({employeeList:cartList,counter:counter, event:event}));
    }

    const handleDelete = (event) => {
        // console.log(event.currentTarget.dataset.id)
        dispatch(deleteItem({employeeList:cartList,counter:counter, event:event}));
    }

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

    
    
        const [cartVal, setCartVal] = useState([])
        
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
            setCartVal(props.cartItems);   
            return(
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Dept</th>
                                <th>Item Count</th>
                                <th></th>
                            </tr> 
                        </thead>

                        {cartVal && cartVal.map((employee)=>{
                            return(       
                                        <tbody>
                                            <tr>
                                                <td>{employee.id}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.dept}</td>
                                                <td>{employee.ItemCount}</td>
                                                <span data-id={employee.id} onClick={handleAdd}>
                                                    <AddIcon/>
                                                </span>
                                                <span data-id={employee.id} onClick={handleDelete}>
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
                    <button onClick={showdetails} className="unbtn">{props.userName}</button>
                    <div id="dropdown-content" className="dropdown-content">
                    
                        <a id="uemail" href={"mailto:"+props.email}>{props.email}</a>
                        <Link to='/signout' onClick="return {Signout};">Signout</Link>

                    </div>
            </div>
            <div id = "upperright1">
                    <button onClick={togglePopup} className="unbtn">Cart {props.counter}</button>
                    {isOpen && <CartPopup/>}

            </div>
        </div>
	</div>
    )

}
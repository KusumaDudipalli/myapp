import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import Leftsidenav from '../Components/leftsidenav'
// import Upperbar from '../Components/upperbar';
import MyTemplate from '../templates/myTemplate'
import './rightdisplay.css'
import { useSelector, useDispatch } from 'react-redux'
import { addpageItem } from '../storeSlice/counterSlice'

export default function AddReport(){

    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(null);

    function AddItem(){
            var now = new Date();
            var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
            var itemname = document.getElementById('itemname').value;
            var itemtype = document.getElementById('itemtype').value;
            var itemprice = document.getElementById('itemprice').value;
            var itemdesc = document.getElementById('itemdesc').value;
            var itemimg = mainImage;

            const Item = {itemname: itemname, itemtype: itemtype,itemprice: itemprice, itemdesc:itemdesc, itemimg:itemimg, createdtime: newtime }

            dispatch(addpageItem({Item:Item}));
    }
    
    return(  
        
        <div>
            <MyTemplate></MyTemplate>
            {/* <Upperbar userName = {localStorage.getItem("currentUser")}  email = {JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).email}></Upperbar>
            <Leftsidenav></Leftsidenav>  */}
            <div id="rightdisplay" class = "parent">
            
                <label for="itemname"><b>Item Name</b></label>
                <input type="text" placeholder="Enter Item Name" name="itemname" id="itemname" required />

                <label for="type"><b>Choose a Item Type:     </b><br /><br/></label>
                <select name="type" id="itemtype">  
                <option value="toys" selected>Toys</option>
                <option value="electronics">Electronics</option>
                </select>
                <br /><br />
                <label for="itemprice"><b>Price</b></label>
                <input type="text" placeholder="Enter Item Price" name="itemprice" id="itemprice" required />

                <label for="itemdesc"><b>Desc</b></label>
                <input type="text" placeholder="Enter Item Desc" name="itemdesc" id="itemdesc" required />

                <label for="avatar"><b>Choose picture:</b></label>
                <input type="file" id="itemimg" name="avatar" accept="image/" onChange={({ target }) => {
              setMainImage(target.files[0]);
             }} required />
                
                {/* <label for="priority"><b>Priority</b></label>
                <input type="number" placeholder="Enter Report Priority" name="priority" id="priority" required /> */}
                    
                <button type="button" id="AddReport" onClick={AddItem}>Add Item</button>
        
            </div>
        </div>
    )

}

import { createSlice } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    cartCount: 0,
    addFlag: "False",
    delFlag: "False",
    cartList: [],
    username: "",
    email: "",
    type: "",
    electronics: [],
    toys: [],
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.itemCount = state.itemCount + 1
    // },
    // decrement: (state) => {
    //   state.itemCount -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.itemCount += action.payload
    // },
    updateuser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.type = action.payload.type;
    },

    updateCart: (state, action) => {
      state.cartList = action.payload.cartList;
      state.cartCount = action.payload.cartCount;
    },
    updateToys: (state, action) => {
      state.toys = action.payload.toys;
    },

    updateElectronics: (state, action) => {
      state.electronics = action.payload.electronics;
    },

    addItem: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.id);
      state.cartCount = state.cartCount + 1;
      state.addFlag = "False";

      axios({
        method: 'get',
        url: `http://localhost:8080/cart/${action.payload.id}`
      }).then((response)=>{
        const item = response.data[0];
        if(item && item.itemtype == action.payload.itemtype) {
            axios({
                method: 'put',
                url: `http://localhost:8080/cart/cartitem/${action.payload.id}`,
                data: {
                  "itemname": item.itemname,
                  "itemtype": item.itemtype,
                  "itemprice":item.itemprice,
                  "itemdesc": item.itemdesc,
                  "itemimg": item.itemimg,
                  "itemcount": item.itemcount+1,
                  "orderedtime": item.orderedtime
                }
            }).then((response)=>{
                console.log(response.data);
                // alert("Item is added");
            });
        }
        else {
          // alert("Check Item type");
          axios({
            method: 'get',
            url: `http://localhost:8080/inventory/item/${action.payload.id}`
          }).then((response)=>{
            const item = response.data[0];
          if(item && item.itemtype == action.payload.itemtype) {
            var now = new Date();
            var newtime = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
            axios({
              method: 'post',
              url: "http://localhost:8080/cart/item",
              data: {
                "itemname": item.itemname,
                "itemtype": item.itemtype,
                "itemprice":item.itemprice,
                "itemdesc": item.itemdesc,
                "itemimg": item.itemimg,
                "itemcount": 1,
                "orderedtime": newtime
              }
          }).then((response)=>{
              console.log(response.data);
          });
          }
          })
        }
      })

      // if (state.cartList.length != 0) {
      //   for (const employee of state.cartList) {
      //     if (employee.id == action.payload.event.currentTarget.dataset.id) {
      //       state.addFlag = "True";
      //       employee.ItemCount = employee.ItemCount + 1;
      //     }
      //   }
      // }

      // if (state.addFlag == "False") {
      //   for (const emp of action.payload.employeeList) {
      //     if (emp.id == action.payload.event.currentTarget.dataset.id) {
      //       state.cartList.push({
      //         id: emp.id,
      //         name: emp.name,
      //         dept: emp.dept,
      //         ItemCount: 1,
      //       });
      //     }
      //   }
      // }
    },
    deleteItem: (state, action) => {
      state.delFlag = "False";

      if (state.cartList.length == 0) {
        alert("No items were present in cart");
      } else {
        for (const employee of state.cartList) {
          if (employee.id == action.payload.event.currentTarget.dataset.id) {
            state.delFlag = "True";
            state.cartCount = state.cartCount - 1;
            // setCounter(counter-1);
            employee.ItemCount = employee.ItemCount - 1;
            if (employee.ItemCount == 0) {
              state.cartList = state.cartList.filter((employee) => {
                if (
                  employee.id != action.payload.event.currentTarget.dataset.id
                )
                  return employee;
              });
            }
          }
        }
      }

      // setEmployeeList(employeeList.filter((employee) => {
      //   if(employee.id != event.target.dataset.id)
      //   return employee;
      // }))
    },
    addpageItem: (state, action) => {
      var alpha = new RegExp(/^[a-zA-Z() ]+$/);
      // var numeric = new RegExp(/^[0-9]+$/)
      // var numeric = /^\d+$/;

      // var existingitemname = "False";

      // if (state[action.payload.Item.itemtype] != []) {
      //   state[action.payload.Item.itemtype].forEach((elem) => {
      //     if (action.payload.Item.itemname == elem.itemname) {
      //       existingitemname = "True";
      //     }
      //   });
      // }


      // if (action.payload.Item.itemname != "" && existingitemname == "True") {
      //   alert("Item already exists");
      //   //seperate the validations
      // } else if (action.payload.Item.itemname == "") {
      //   alert("Item Name should not be blank");
      // } else if (action.payload.Item.itemtype == "") {
      //   alert("Item Type Should not be blank");
      // } else if (action.payload.Item.itemprice == "") {
      //   alert("Price should not be blank");
      // }
      //   else if(isNaN(action.payload.Item.itemprice)){
      //     alert("Price should be numeric");
      // }
      // else if(action.payload.Item.itemname.match(alpha) == null){
      //     alert("Enter Alphabets only in Item name");
      // }
      // else if(itemtype.match(alpha) == null){
      //     alert("Enter Alphabets only in Report Type");
      // }
      // else {
        
      //   let temparr = [...state[action.payload.Item.itemtype]];
      //   temparr.push(action.payload.Item);
      //   state[action.payload.Item.itemtype] = [...temparr];
      // }

      
      axios({
        method: 'get',
        url: `http://localhost:8080/inventory/item/${action.payload.Item.itemname}`
      }).then((response)=>{
        const item = response.data[0];
        if(item && action.payload.Item && item.itemtype == action.payload.Item.itemtype) {
            alert(action.payload.Item.itemtype + " Item already exists");
        //seperate the validations	
        }
        else if (action.payload.Item.itemname == "") {
          alert("Item Name should not be blank");
        } else if (action.payload.Item.itemtype == "") {
          alert("Item Type Should not be blank");
        } else if (action.payload.Item.itemprice == "") {
          alert("Price should not be blank");
        }
          else if(isNaN(action.payload.Item.itemprice)){
            alert("Price should be numeric");
        }
        else if(action.payload.Item.itemname.match(alpha) == null){
            alert("Enter Alphabets only in Item name");
        }
        else if(action.payload.Item.itemtype.match(alpha) == null){
          alert("Enter Alphabets only in Report Type");
      }
        else{
            axios({
                method: 'post',
                url: "http://localhost:8080/inventory/item",
                data: {
                  "itemname": action.payload.Item.itemname,
                  "itemtype": action.payload.Item.itemtype,
                  "itemprice":action.payload.Item.itemprice,
                  "itemdesc": action.payload.Item.itemdesc,
                  "itemimg": action.payload.Item.itemimg,
                  "createdtime": action.payload.Item.createdtime
                }
            }).then((response)=>{
                console.log(response.data);
                alert("Item is added");
            });
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, updateuser, addpageItem, updateCart, updateToys, updateElectronics } =
  counterSlice.actions;

export default counterSlice.reducer;

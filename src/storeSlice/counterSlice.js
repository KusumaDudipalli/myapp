import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cartCount: 0,
    addFlag: "False",
    delFlag:"False",
    cartList:[]
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
    addItem: (state, action) => {
        console.log(action.payload);
            console.log(action.payload.event.currentTarget.dataset.id);
            state.cartCount = state.cartCount + 1;
            state.addFlag = "False";
    
               
                    
                if(state.cartList.length != 0){
                    for(const employee of state.cartList){
                        if(employee.id == action.payload.event.currentTarget.dataset.id)
                        {
                            state.addFlag = "True";
                            employee.ItemCount = employee.ItemCount +1;
                        }
                }}
                        
                    if(state.addFlag == "False"){
                        for(const emp of action.payload.employeeList){
                            if(emp.id == action.payload.event.currentTarget.dataset.id)
                                {
                                    state.cartList.push({id:emp.id, name:emp.name, dept:emp.dept, ItemCount:1 });
                                        
                                }
                        } 
                    }
                    
                    
        

    },
    deleteItem: (state, action) => {
       state.delFlag = "False";
      
      if(state.cartList.length == 0){
        alert("No items were present in cart");
      }
      else{
        for(const employee of state.cartList){
            if(employee.id == action.payload.event.currentTarget.dataset.id)
            {
                state.delFlag = "True";
                state.cartCount = state.cartCount-1;
                // setCounter(counter-1);
                employee.ItemCount = employee.ItemCount -1;
                if (employee.ItemCount == 0){
                     state.cartList = state.cartList.filter((employee) => {
                         if(employee.id != action.payload.event.currentTarget.dataset.id)
                           return employee;
                         })
                 }
            }
    }
      }

      // setEmployeeList(employeeList.filter((employee) => {
      //   if(employee.id != event.target.dataset.id)
      //   return employee;
      // }))
        
    },
  }
})

// Action creators are generated for each case reducer function
export const {addItem, deleteItem} = counterSlice.actions

export default counterSlice.reducer
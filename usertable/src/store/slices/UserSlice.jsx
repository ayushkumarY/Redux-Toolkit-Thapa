import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("hii" + action.payload);
      // state.pop(action.payload);
      let userIndexNum = state.indexOf(action.payload);
      state.splice(userIndexNum, 1);
      // state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      // console.log("hii delete");
      return [];
    },
  },

  // If action is supposed to be handeled ny one reducer,use reducers.  
   
  // If action is supposed to be handeled by multiple reducers , use extraReducers.  
         
  // console.log(userSlice.actions.addUser());

  extraReducers(builder) {
    builder.addCase(userSlice.actions.clearAllUsers, () => {
      return [];
    });
  },
});

// console.log(userSlice.actions);
// console.log(userSlice.actions.addUser());

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;

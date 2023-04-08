import { createSlice } from "@reduxjs/toolkit";
import { removeAll } from "../actions";
const userSlice = createSlice({
  name: "userslice",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // removeAll(state, action) {
    //   //state.splice(0, state.length);
    //   return [];
    // },
  },
  extraReducers(builds) {
    builds.addCase(removeAll, () => {
      return [];
    });
  },
});

export { userSlice };

//export const { addUser, removeUser, removeAll } = userSlice.actions;
export const { addUser, removeUser } = userSlice.actions;

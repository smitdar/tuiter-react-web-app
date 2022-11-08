import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
 "userName": "Oracle",
 "handle": "@oracle",
 "image": "../Tuiterimages/oraclelogo.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": true,
 "replies": "100",
 "retuits": "5.5k",
 "likes": "10k",
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
      const index = state
         .findIndex(tuit =>
            tuit._id === action.payload);
      state.splice(index, 1);
    },

   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   }
 }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
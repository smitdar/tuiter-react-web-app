import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {createTuitThunk,deleteTuitThunk,findTuitsThunk,updateTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}


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
 initialState,
 extraReducers: {

[updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }
,

  [createTuitThunk.fulfilled]:
       (state, { payload }) => {
         state.loading = false
         console.log(payload)
         state.tuits.push({
                             ...templateTuit,
                             ...payload,
                             _id: (new Date()).getTime(),
                         })
     },

     [deleteTuitThunk.fulfilled] :
       (state, { payload }) => {
       state.loading = false
       state.tuits = state.tuits
         .filter(t => t._id !== payload)
     },

   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
   }
 },


   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   }
 }
);

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
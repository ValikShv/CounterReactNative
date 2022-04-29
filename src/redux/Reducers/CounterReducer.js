import {createEntityAdapter, createReducer} from "@reduxjs/toolkit";
import Actions from "../Actions";

const InitialState = {
  sum: 0,
};

export default createReducer(InitialState, builder => {
  builder
    .addCase(Actions.Counter.Update, (state, {payload}) => {
      state.sum = payload;
    })
});

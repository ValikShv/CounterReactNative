import {createAction} from "@reduxjs/toolkit";

const Actions = {
  Counter: {
    Update: createAction('counter/Update'),
  },
};

export default Actions;

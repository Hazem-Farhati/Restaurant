import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//get menu 
export const getMenu = createAsyncThunk("menu/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/menu/all`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  menu: null,
  status: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    //get menu extra reducers
    /////////////get menu////////////////////////
    [getMenu.pending]: (state) => {
      state.status = "loading";
    },
    [getMenu.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.menu = action.payload.menu;
    },
    [getMenu.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default menuSlice.reducer;

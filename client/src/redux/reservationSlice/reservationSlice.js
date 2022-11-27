import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get reservation 
export const getReservation = createAsyncThunk("reservation/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/reservation/all`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//add reservation
export const createReservation = createAsyncThunk(
  "reservation/add",
  async (reservation) => {
    try {
      let result = await axios.post(
        `http://localhost:5000/reservation/add`,
        reservation
      );
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//update reservation
export const updatReservation = createAsyncThunk(
  "reservation/update",
  async ({ id, reservation}) => {
    try {
      console.log(reservation,"res");
      let result = axios.put(
        `http://localhost:5000/reservation/update/${id}`,
        reservation
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//update all reservation
export const updateAllReservation = createAsyncThunk(
  "reservation/all/update",
  async ({ id, reservation}) => {
    try {
      console.log(reservation,"res");
      let result = axios.put(
        `http://localhost:5000/reservation/update/all`,
        reservation
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  reservation: null,
  status: null,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    //add reservation extra reducers
    [createReservation.pending]: (state) => {
      state.status = "loading...";
    },
    [createReservation.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.reservation = [...state.reservation, action.payload.reservation];
      return state;
    },
    [createReservation.rejected]: (state) => {
      state.status = "fail";
    },

    /////////////get reservation////////////////////////
    [getReservation.pending]: (state) => {
      state.status = "loading";
    },
    [getReservation.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.reservation = action.payload.reservation;
    },
    [getReservation.rejected]: (state) => {
      state.status = "failed";
    },

    ///////////update reservation///////////
    [updatReservation.pending]: (state) => {
      state.status = "pending";
    },
    [updatReservation.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatReservation.rejected]: (state) => {
      state.status = "rejected";
    },

    ///////////update all reservation///////////
    [updateAllReservation.pending]: (state) => {
      state.status = "pending";
    },
    [updateAllReservation.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updateAllReservation.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default reservationSlice.reducer;


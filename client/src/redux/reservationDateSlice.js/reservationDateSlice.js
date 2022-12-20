import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get reservationDate
export const getReservationDate = createAsyncThunk("reservationDate/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/reservationDate/all`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//add reservationDate
export const createReservationDate = createAsyncThunk(
  "reservationDate/add",
  async (reservationDate) => {
    try {
      let result = await axios.post(
        `http://localhost:5000/reservationDate/add`,
        reservationDate
      );
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//update reservationDate
export const updatReservationDate = createAsyncThunk(
  "reservationDate/update",
  async ({ id, reservationDate }) => {
    try {
      console.log(reservationDate, "res");
      let result = axios.put(
        `http://localhost:5000/reservationDate/update/${id}`,
        reservationDate
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//update all reservationDate
export const updateAllReservationDate = createAsyncThunk(
  "reservationDate/all/update",
  async ({ id, reservationDate }) => {
    try {
      console.log(reservationDate, "res");
      let result = axios.put(
        `http://localhost:5000/reservationDate/update/all`,
        reservationDate
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  reservationDate: null,
  status: null,
};

export const reservationDateSlice = createSlice({
  name: "reservationDate",
  initialState,
  reducers: {},
  extraReducers: {
    //add reservationDate extra reducers
    [createReservationDate.pending]: (state) => {
      state.status = "loading...";
    },
    [createReservationDate.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.reservationDate =  [...state.reservationDate,action.payload.reservationDate];
      return state;
    },
    [createReservationDate.rejected]: (state) => {
      state.status = "fail";
    },

    /////////////get reservationDate////////////////////////
    [getReservationDate.pending]: (state) => {
      state.status = "loading";
    },
    [getReservationDate.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.reservationDate = action.payload.reservationDate;
    },
    [getReservationDate.rejected]: (state) => {
      state.status = "failed";
    },

    ///////////update reservationDate///////////
    [updatReservationDate.pending]: (state) => {
      state.status = "pending";
    },
    [updatReservationDate.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatReservationDate.rejected]: (state) => {
      state.status = "rejected";
    },

    ///////////update all reservationDate///////////
    [updateAllReservationDate.pending]: (state) => {
      state.status = "pending";
    },
    [updateAllReservationDate.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updateAllReservationDate.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default reservationDateSlice.reducer;

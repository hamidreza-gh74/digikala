import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export function fetch_data(name, adress) {
  const myfetch = createAsyncThunk(name, async () => {
    const res = await axios.get(adress);
    return res.data;
  });
  return myfetch;
}

export function create_slice(name, fetch_data) {

  const myslice = createSlice({
    name: name,
    initialState: {
      data: [],
      loading: true,
      error: "",
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetch_data.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(fetch_data.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(fetch_data.rejected, (state, action) => {
          state.error = "server is out ...";
          state.loading = true;
        });
    },
  });

  return myslice;
}


// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// import axios from "axios";

// export function fetch_data(name, adress) {
//   const data = createAsyncThunk(name, async () => {
//     const res = await axios.get(adress);
//     return res.data;
//   });
//   return data;
// }

// export function create_slice(name, init, fetch_data) {
//   let initialState = init
//   const data = createSlice({
//     name: name,
//     initialState,
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetch_data.fulfilled, (state, action) => {
//           state.slider_first = action.payload;
//           state.loading = false;
//         })
//         .addCase(fetch_data.pending, (state, action) => {
//           state.loading = true;
//         })
//         .addCase(fetch_data.rejected, (state, action) => {
//           state.error = "server is out ...";
//           state.loading = true;
//         });
//     },
//   });

//   return data;
// }
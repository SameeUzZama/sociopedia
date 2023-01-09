// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Login from "../../pages/Login";
// import * as api from "../api";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ formValue, navigate, toast }) => {
//     try {
//       const response = await api.signIn(formValue);
//       toast.success("Login Successfully");
//       navigate("/");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     error: "",
//     loading: false,
//   },
//   extraReducers: {
//     [Login.pending]: (state, action) => {
//       state.loading = true;
//     },
//   },
// });

// export default authSlice.reducer;

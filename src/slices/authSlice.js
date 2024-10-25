import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token"),
  email: "",
  _id: "",
  isAdmin: false,
  isAccept: false,
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, { rejectWithValue }) => {
      try {
        const token = await axios.post(`${url}/register`, {
          email: values.email,
          password: values.password,
          // Add placeholder values for other fields
          first_name: "Placeholder",
          last_name: "Placeholder",
          phone: "0000000000",
          dateofBirth: new Date().toISOString(),
          residence_country: "Placeholder",
          nationality: "Placeholder",
        });
        localStorage.setItem("token", token.data);
        return token.data;
      } catch (error) {
        console.log(error.response.data);
        toast.error(error.response?.data, {
          position: "bottom-left",
        });
        return rejectWithValue(error.response.data);
      }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (values, { rejectWithValue }) => {
      try {
        const token = await axios.post(`${url}/login`, {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("token", token.data);
        return token.data;
      } catch (error) {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: "bottom-left",
        });
        return rejectWithValue(error.response.data);
      }
    }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept: user.isAccept,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        email: "",
        _id: "",
        isAdmin: false,
        isAccept: false,
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept: user.isAccept,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          isAccept: user.isAccept,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
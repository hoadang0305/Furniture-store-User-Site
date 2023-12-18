import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import {
  clearAuthStorage,
  getAuthUser,
  setAccessToken,
  setAuthUser,
  setRefreshToken,
} from "../../utils/authStorage";
import { notification } from "antd";
import { RadiusBottomrightOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";
import { Button, Divider, Space } from "antd";

// API: Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const data = await authService.login(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: Logout
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (refreshToken, thunkAPI) => {
    return;
  }
);

// API: Update
export const updateUser = createAsyncThunk(
  "auth/update",
  async (updatedUserData, thunkAPI) => {
    try {
      return await authService.update(updatedUserData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: Forgot password
export const forgotPass = createAsyncThunk(
  "auth/forgot",
  async (email, thunkAPI) => {
    try {
      return await authService.forgotPassword(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: Reset password
export const resetPass = createAsyncThunk(
  "auth/reset",
  async (password, thunkAPI) => {
    try {
      return await authService.resetPassword(password);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: User cart
export const getUserCart = createAsyncThunk(
  "auth/user-cart",
  async (_, thunkAPI) => {
    try {
      return await authService.userCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  userCart: null,
  message: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // API: Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.createdUser = action.payload;
        if (state.createdUser !== null && state.message === "") {
          window.location.assign("/login");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
        state.createdUser = null;
      })

      // API: Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.user = action.payload;
        setAuthUser(state.user);
        setAccessToken(state.user.token);
        setRefreshToken(state.user.refreshToken);
        notification.success({
          message: "Hello User",
          description: "Welcome to Future Furniture!",
        });
        setTimeout(() => {
          window.location.assign("/");
        }, 1000);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
        state.user = null;
      })

      // API: Logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        clearAuthStorage();
        state.user = null;
        if (state.user === null && state.message === "") {
          window.location.assign("/");
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })

      // API: Update
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const user = getAuthUser();
        console.log(action.payload);
        state.isLoading = false;
        state.message = "";
        state.user = { ...user, ...action.payload };
        setAuthUser(state.user);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })

      // API: Forgot Password
      .addCase(forgotPass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.token = action.payload;
        setAccessToken(state.token);
      })
      .addCase(forgotPass.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
        notification.error({ message: "Email not existed" });
      })

      // API: Reset Password
      .addCase(resetPass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        window.location.assign("/login");
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
        notification.error(action.error);
      })

      // API: User cart
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.userCart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default authSlice.reducer;

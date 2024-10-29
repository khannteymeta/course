import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async (
    { username, email, role, password, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      const body = JSON.stringify({
        username,
        role,
        email,
        password,
        confirmPassword,
      });
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}register/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

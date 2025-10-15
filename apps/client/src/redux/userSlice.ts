import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  accessToken?: string | null;
}

const initialState: UserState = {
  accessToken: localStorage.getItem("accessToken"),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
    },
    removeToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setToken, removeToken } = userSlice.actions;

export default userSlice.reducer;

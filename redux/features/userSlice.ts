import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfoState {
  id: string;
}

interface UserState {
  userInfo: UserInfoState;
}

const initialState: UserState = {
  userInfo: { id: "none" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<UserInfoState>) => {
      state.userInfo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

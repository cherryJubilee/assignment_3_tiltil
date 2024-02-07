import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  nickname: string;
  age: number;
};

const initialState: ProfileState = {
  nickname: "",
  age: 0,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state: ProfileState, action: PayloadAction<ProfileState>) {
      const { nickname, age } = action.payload;
      state.nickname = nickname;
      state.age = age;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;

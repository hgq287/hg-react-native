import { createSlice } from '@reduxjs/toolkit'

const profilePic = require('@assets/images/profile-pic.png');
const initialState = {
  email: null,
  password: null,
  username: "hgq287",
  displayName: "Hg Q.",
  bio: "Mobile App Solutions Architect & Open Source Enthusiast",
  avatar: profilePic,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (
      state,
      {
        payload: { user = {}, _id },
      },
    ) => {
      state.email = user.email;
      state.username = user.username;
      state.password = user.password;
    },
  },
})

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) => state.user;
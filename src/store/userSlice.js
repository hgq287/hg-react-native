import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  password: null,
  username: null,
  bio: null,
  avatar: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (
      state,
      {
        payload: { user = {}, id },
      },
    ) => {
      state.email = user.email;
      state.username = user.username;
      state.password = user.password;
      state.bio = user.bio;
      state.avatar = user.avatar;
    },
  },
})

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) => state.user.token;
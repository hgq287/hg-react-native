import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user = {}, token },
      },
    ) => {
      console.log('[authSlice] - setCredentials', { user, token });
      state.token = token;
      state.user = user;
    },
  },
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: any) => state.auth.token;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newsList: null,
}

export const newsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    postNews: (
      state,
      {
        payload: { news = {}, id },
      },
    ) => {
      console.log(news.title);
    },
  },
})

export const { postNews } = newsSlice.actions;

export default newsSlice.reducer;

export const selectAccessToken = (state) => state.news.newsList;
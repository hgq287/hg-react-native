import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newsList: null,
}

export const newsSlice = createSlice({
  name: 'news',
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

export const newsList = (state) => state.news.newsList;
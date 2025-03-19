import { Status } from "@/shared/interfaces"
import { NewsState } from "../model/types"
import { createSlice } from "@reduxjs/toolkit"
import { fetchNews } from "./newsApi"


const initialState: NewsState = {
    newsData: [],
    statusLoading:  Status.IDLE,
    statusError: ''
}

const newsSlice = createSlice({
  name: "profileAndNews",
  initialState,
  reducers: {
    setNewsData (state, action) {
      state.newsData = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchNews.fulfilled, (state, action) => {
      state.newsData = action.payload
      state.statusLoading = Status.SUCCESS
      state.statusError = ''
    })
    .addCase(fetchNews.pending, (state) => {
      state.statusLoading = Status.LOADING
      state.newsData = []
      state.statusError = ''
    })
    .addCase(fetchNews.rejected, (state) => {
      state.statusLoading = Status.ERROR
      state.newsData = []
      state.statusError = "Ошибка загрузки новостей"
    })
  }
})

export const { setNewsData} = newsSlice.actions

export default newsSlice.reducer
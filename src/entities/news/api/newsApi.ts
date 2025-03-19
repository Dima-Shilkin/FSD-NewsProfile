import axios from "axios"
import { Post } from "../model/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchNews = createAsyncThunk<Post[], number>('news/fetchNews', async (currentPage) => {
  const { data } = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=4`)
  return data
})
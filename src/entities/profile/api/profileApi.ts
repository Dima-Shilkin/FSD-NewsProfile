import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "../model/types"

export const fetchProfile = createAsyncThunk<User>('profile/fetchProfile', async () => {
  const { data } = await axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
  return data
})
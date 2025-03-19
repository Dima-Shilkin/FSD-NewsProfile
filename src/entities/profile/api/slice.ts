import { Status } from "@/shared/interfaces"
import { Profile } from "../model/types"
import { createSlice } from "@reduxjs/toolkit"
import { fetchProfile } from "./profileApi"

const emptyProfileData = {
  name: '',
  email: '',
  phone: '',
  address: {
    city: '',
    street: ''
  }
}

const initialState: Profile = {
    profileData: emptyProfileData,
    statusLoading:  Status.IDLE,
    statusError: ''
}



const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData (state, action) {
      state.profileData = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
    //профиль
    .addCase(fetchProfile.fulfilled, (state, action) => {
      state.profileData = action.payload
      state.statusLoading = Status.SUCCESS
      state.statusError = ''
      
    })
    .addCase(fetchProfile.pending, (state) => {
      state.statusLoading = Status.LOADING
      state.profileData = emptyProfileData
      state.statusError = ''
    })
    .addCase(fetchProfile.rejected, (state) => {
      state.statusLoading = Status.ERROR
      state.profileData = emptyProfileData
      state.statusError = "Ошибка загрузки профиля и новостей"
    })
  }
})

export const {setProfileData} = profileSlice.actions

export default profileSlice.reducer
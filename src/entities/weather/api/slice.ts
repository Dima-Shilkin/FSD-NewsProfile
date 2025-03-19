import { Status } from "@/shared/interfaces"
import { WeatherSliceState } from "../model/types"
import { createSlice } from "@reduxjs/toolkit"
import { fetchWeather } from "./weatherApi"
import { saveCityToLocalStorage } from "@/shared/helpers/LSforWeather"


const initialState: WeatherSliceState = {
  weatherData: {
    temperature: 0,
    name: '',
    description: '',
    img: ''
  },
  statusLoading: Status.IDLE,
  statusError: '',
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weatherData = action.payload
      state.statusLoading = Status.SUCCESS
      state.statusError = ''

      saveCityToLocalStorage(action.meta.arg);
    })
    builder.addCase(fetchWeather.pending, (state) => {
      state.statusLoading = Status.LOADING
      state.weatherData = {
        temperature: 0,
        name: '',
        description: '',
        img: ''
      }
      state.statusError = ''
    })
    builder.addCase(fetchWeather.rejected, (state) => {
      state.statusLoading = Status.ERROR
      state.weatherData = {
        temperature: 0,
        name: '',
        description: '',
        img: ''
      }
      state.statusError = "Ошибка загрузки погоды"
    })
  }
})

export const {setWeatherData} = weatherSlice.actions

export default weatherSlice.reducer
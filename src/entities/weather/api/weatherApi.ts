import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { OpenWeatherResponse, WeatherData } from "../model/types";

const KEYweather: string = import.meta.env.VITE_KEY_API;

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  'weather/fetchWeather',
  async (location) => {
    const { data } = await axios.get<OpenWeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEYweather}&units=metric&lang=ru`
    )
    const { main, name, weather } = data;
    return {
      temperature: main.temp,
      name,
      description: weather[0].description,
      img: weather[0].icon,
    };
  }
)
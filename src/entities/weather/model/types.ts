import { Status } from "@/shared/interfaces";

export interface WeatherData {
  temperature: number;
  name: string;
  description: string;
  img: string;
}

export interface OpenWeatherResponse {
  main: {
    temp: number;
  };
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface WeatherSliceState {
  weatherData: WeatherData;
  statusLoading: Status;
  statusError: string
}
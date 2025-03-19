import { configureStore } from "@reduxjs/toolkit";
import currency from '@/entities/currency/api/slice'
import weather from '@/entities/weather/api/slice'
import news from '@/entities/news/api/slice'
import profile from '@/entities/profile/api/slice'

export const store = configureStore({ 
  reducer: {
    currency,
    weather,
    news,
    profile
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
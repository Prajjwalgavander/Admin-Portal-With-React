import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import hamSlice from './Ham/hamSlice'
import toasterSlice from './Toaster/toasterSlice'
import loaderSlice from './Loader/loaderSlice'

export const rootReducer = combineReducers({
  auth: authSlice,
  ham: hamSlice,
  toaster: toasterSlice,
  loader: loaderSlice
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  // loginService,
  // logoutService,
  updatePasswordService
} from 'network/services/auth.service'
import { ROUTE_PATHS } from 'utils/constants'
import { signIn, signOut } from 'utils/common-services/cookie.services'

/**
 * Operator Login Thunk
 */
export const operatorLogin = createAsyncThunk('operator/login', async ({ username, password, navigate }, thunkApi) => {
  try {
    // const res = await loginService({ username, password })
    signIn({
      token: 'test'// res.accessToken,
    })
    navigate(ROUTE_PATHS.dashboard, {
      replace: true
    })
    // return res
  } catch (error) {
    return thunkApi.rejectWithValue(error[0].description)
  }
})

/**
 * Operator Logout Thunk
 */
export const operatorLogout = createAsyncThunk('operator/logout', async ({ navigate }, thunkApi) => {
  try {
    signOut()
    navigate(ROUTE_PATHS.login, {
      replace: true
    })
    // const res = await logoutService()
    // return res
  } catch (error) {
    return thunkApi.rejectWithValue(error[0].description)
  }
})

/**
 * Operator Change Password Thunk
 */
export const updatePassword = createAsyncThunk('update/password', async ({ oldPassword, newPassword }, thunkApi) => {
  try {
    const res = await updatePasswordService({ oldPassword, newPassword })
    return res
  } catch (error) {
    return thunkApi.rejectWithValue(error[0].description)
  }
})

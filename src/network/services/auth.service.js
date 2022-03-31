import axiosInstance, { microServices } from 'network/apis'
import { LOADER_HANDLER_TYPES, METHOD_TYPES } from 'utils/constants'

const LOGIN = '/auth/login'
const LOGOUT = '/auth/logout'
const UPDATEPASSWORD = '/profile/change-password'

/**
 * Service to do login
 * @param {object} data - object contains username and password
 */
export const loginService = (data) => {
  return axiosInstance(
    METHOD_TYPES.post,
    LOGIN,
    data,
    {
      server: microServices.BASE_URL1,
      handlerEnabled: false,
      loader: LOADER_HANDLER_TYPES.submit,
      successMessage: 'Logged In Successfully !'
    }
  )
}

/**
 * Service to do logout
 */
export const logoutService = () => {
  return axiosInstance(
    METHOD_TYPES.get,
    LOGOUT,
    {},
    {
      server: microServices.BASE_URL1,
      loader: LOADER_HANDLER_TYPES.page,
      successMessage: 'Logged Out Successfully !'
    }
  )
}

/**
 * Service to change password
 * @param {object} data - object contains old and new password
 */
export const updatePasswordService = (data) => {
  return axiosInstance(
    METHOD_TYPES.put,
    UPDATEPASSWORD,
    data,
    {
      server: microServices.BASE_URL1,
      loader: LOADER_HANDLER_TYPES.submit,
      successMessage: 'Password Updated Successfully !'
    }
  )
}

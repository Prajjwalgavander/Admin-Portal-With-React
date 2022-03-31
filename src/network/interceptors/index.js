import store from 'index'
import { startLoader, stopLoader } from 'redux-thunk/redux/Loader/loaderSlice'
import { getAuthToken, signOut } from 'utils/common-services/cookie.services'
import { openErrorToaster, openSuccessToaster } from 'utils/common-services/toaster.services'

export const requestHandler = (request) => {
  if (request.handlerEnabled) {
    const authToken = getAuthToken()
    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`
    }
  }
  // Loader Logic to add loader
  if (request.loader) {
    store.dispatch(startLoader(request.loader))
  }
  return request
}

export const responseSuccessHandler = (response) => {
  const { responseType = 'json', loader, successMessage } = response.config || {}
  if (responseType === 'blob') {
    return { file: response.data, headers: response.headers }
  }
  // Loader logic to remove loader
  if (loader) {
    store.dispatch(stopLoader(loader))
  }
  // Open Success Toaster
  successMessage && openSuccessToaster(store.dispatch, successMessage || response.data.data.message)
  return response.data.data
}

export const errorHandler = (error) => {
  if (error.response.status === 401) {
    // Snackbar UnAuthed
    openErrorToaster(store.dispatch, 'UnAuthorized')
    // signOut Logic
    signOut()
    return Promise.reject(error.response.data.errors)
  } else if (error.response.status === 500) {
    // Snackbar Internal Server Error
    openErrorToaster(store.dispatch, 'Internal Server Error')
    return Promise.reject(error.response.data.errors)
  }
  // Other errors
  if (error.response.config.loader) {
    store.dispatch(stopLoader(error.response.config.loader))
  }
  // Open Error Toaster
  openErrorToaster(store.dispatch, error.response.data.errors[0].description)
  return Promise.reject(error.response.data.errors)
}

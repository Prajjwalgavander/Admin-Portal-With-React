import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { TOASTER_TYPE } from 'utils/constants'

export const openSuccessToaster = (dispatch, message) => {
  dispatch(
    handleToaster({
      openToaster: true,
      toasterMessage: message,
      toasterType: TOASTER_TYPE.success
    })
  )
}

export const openErrorToaster = (dispatch, message) => {
  dispatch(
    handleToaster({
      openToaster: true,
      toasterMessage: message,
      toasterType: TOASTER_TYPE.error
    })
  )
}

export const openWarningToaster = (dispatch, message) => {
  dispatch(
    handleToaster({
      openToaster: true,
      toasterMessage: message,
      toasterType: TOASTER_TYPE.warning
    })
  )
}

export const openInfoToaster = (dispatch, message) => {
  dispatch(
    handleToaster({
      openToaster: true,
      toasterMessage: message,
      toasterType: TOASTER_TYPE.info
    })
  )
}

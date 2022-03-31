import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Alert, Slide, Snackbar } from '@mui/material'
import { connect } from 'react-redux'
import { handleToaster } from 'redux-thunk/redux/Toaster/toasterSlice'
import { notificationRoot } from 'assets/dom/domNodes'

const TransitionLeft = (props) => {
  return <Slide {...props} direction='right' />
}

export const Toaster = ({ openToaster, toasterType, toasterMessage, handleToasterClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleToasterClose}
      open={openToaster}
      style={{ maxWidth: '95vw', width: 'fit-content', padding: 0 }}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        style={{
          fontSize: 16,
          opacity: 0.95
        }}
        variant='filled'
        onClose={handleToasterClose}
        severity={toasterType}
      >
        {toasterMessage}
      </Alert>
    </Snackbar>
  )
}

export const AppToaster = ({ openToaster, toasterMessage, toasterType, handleToaster }) => {
  const handleToasterClose = () => {
    handleToaster({
      openToaster: false,
      toasterMessage,
      toasterType
    })
  }

  return notificationRoot
    ? createPortal(<Toaster openToaster={openToaster} toasterMessage={toasterMessage} toasterType={toasterType} handleToasterClose={handleToasterClose} />, notificationRoot)
    : <></>
}

Toaster.defaultProps = {
  openToaster: true,
  toasterMessage: 'This is demo of toaster',
  toasterType: 'success',
  handleToasterClose: () => {}
}

Toaster.propTypes = {
  openToaster: PropTypes.bool,
  toasterMessage: PropTypes.string,
  toasterType: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  handleToasterClose: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    openToaster: state.toaster.openToaster,
    toasterMessage: state.toaster.toasterMessage,
    toasterType: state.toaster.toasterType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToaster: ({ openToaster, toasterMessage, toasterType }) => dispatch(handleToaster({ openToaster, toasterMessage, toasterType }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppToaster)

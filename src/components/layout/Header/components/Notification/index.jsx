import { NotificationIcon } from 'components/ui-kit/icons/iconComponents/NotificationIcon'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openWarningToaster } from 'utils/common-services/toaster.services'
import { StyledIconButton } from 'components/layout/Header/styles'

const Notification = ({ showNotification }) => {
  return (
    <StyledIconButton onClick={showNotification}>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}

Notification.propTypes = {
  showNotification: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNotification: () => openWarningToaster(dispatch, 'You don\'t have any pending notification !!')
  }
}

export default connect(null, mapDispatchToProps)(Notification)

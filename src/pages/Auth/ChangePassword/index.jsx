import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CustomButton from 'components/ui-kit/Button'
import CustomTextField from 'components/ui-kit/TextField'
import { LOADER_TYPE } from 'utils/constants'
import CustomTypography from 'components/ui-kit/Typography'
import AppLoader from 'components/ui-kit/AppLoader'
import { updatePassword } from 'redux-thunk/thunk/Auth/Auth'
import { useChangePasswordController } from './controller/useChangePasswordController'
import { ChangePasswordRootContainer, StyledPaper } from './styles'

const ChangePassword = ({ updatePasswordLoading, updatePassword }) => {
  const { t, handleSubmit, values, handleChange, errors } = useChangePasswordController({ updatePasswordLoading, updatePassword })

  return (
    <ChangePasswordRootContainer>
      <div style={{
        width: '100%',
        marginBottom: '15px'
      }}
      >
        <CustomTypography
          value={t('changePassword')}
          variant='h4'
          sx={{
            marginBottom: '15px',
            margin: 'auto',
            width: 'fit-content',
            display: 'block'
          }}
        />
      </div>
      <StyledPaper elevation={3}>
        <div style={{ margin: 'auto' }}>
          <CustomTextField
            id='currentPassword'
            name='currentPassword'
            value={values.currentPassword}
            onChange={handleChange}
            error={errors.currentPassword}
            helperText={errors.currentPassword}
            enableValidation={Boolean(
              values.currentPassword || errors.currentPassword
            )}
            type='password'
            sx={{ marginBottom: '20px' }}
            label={t('currentPassword')}
          />
          <CustomTextField
            id='newPassword'
            name='newPassword'
            value={values.newPassword}
            onChange={handleChange}
            error={errors.newPassword}
            helperText={errors.newPassword}
            enableValidation={Boolean(values.newPassword || errors.newPassword)}
            type='password'
            sx={{ marginBottom: '20px' }}
            label={t('newPassword')}
          />
          <CustomTextField
            id='confirmPassword'
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword}
            enableValidation={Boolean(
              values.confirmPassword || errors.confirmPassword
            )}
            type='password'
            sx={{ marginBottom: '20px' }}
            label={t('confirmPassword')}
          />
        </div>

        <CustomButton
          sx={{ margin: '10px 0' }}
          disabled={Object.keys(errors).length !== 0}
          onClick={handleSubmit}
        >
          {updatePasswordLoading
            ? (
              <AppLoader variant={LOADER_TYPE.PULSE} size={5} />
              )
            : (
              <CustomTypography
                sx={{ fontWeight: 'bold' }}
                value={t('changePassword')}
              />
              )}
        </CustomButton>
      </StyledPaper>
    </ChangePasswordRootContainer>
  )
}

ChangePassword.propTypes = {
  updatePasswordLoading: PropTypes.bool,
  updatePassword: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    updatePasswordLoading: state.loader.submitButtonLoader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (values) => dispatch(updatePassword(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)

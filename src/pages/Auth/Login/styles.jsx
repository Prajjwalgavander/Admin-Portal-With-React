import { styled } from '@mui/material'

export const LoginContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  padding: '4%',
  justifyContent: 'center',
  maxWidth: '500px  ',
  margin: '40px auto',
  textAlign: 'left'
}))

export const ForgotPasswordLinkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10px'
}))

export const RootLoginContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const WelcomeTextContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const LoginIconContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100%'
}))

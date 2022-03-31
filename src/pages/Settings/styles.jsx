import { styled } from '@mui/material'

export const RootContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}))

export const ChangePasswordLinkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  textDecoration: 'underline'
}))

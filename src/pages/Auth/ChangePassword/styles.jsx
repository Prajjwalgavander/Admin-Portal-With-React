import { styled, Paper } from '@mui/material'

export const ChangePasswordRootContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh'
}))

export const StyledPaper = styled(Paper)(() => ({
  display: 'block',
  width: 'fit-content',
  padding: '4%',
  marginTop: '20px',
  borderRadius: '15px',
  margin: 'auto',
  textAlign: 'center'
}))

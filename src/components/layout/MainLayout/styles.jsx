import { Box, styled } from '@mui/material'

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${theme.drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

export const StyledBox = styled(Box)(
  ({ theme, display, flexGrow, padding, height }) => ({
    display: display || 'block',
    flexGrow: flexGrow || 0,
    padding: padding || 0,
    height: height || 'auto',
    width: '100%',
    backgroundColor: theme.colors.neutralLightBlue || 'none'
  })
)

export const StyledMainLayoutChildren = styled('div')(
  ({ theme }) => ({
    width: '100%',
    padding: '30px',
    backgroundColor: theme.colors.neutralLightBlue
  })
)

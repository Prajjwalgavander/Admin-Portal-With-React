import MuiAppBar from '@mui/material/AppBar'
import { styled, Toolbar } from '@mui/material'

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  color: theme.colors.black,
  boxShadow: theme.colors.greyShadow,
  ...(open && {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: `${theme.drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

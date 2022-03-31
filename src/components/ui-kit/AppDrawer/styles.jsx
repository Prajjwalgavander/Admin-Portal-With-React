import { Drawer, IconButton, styled } from '@mui/material'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.mixins.toolbar
}))

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.drawerWidth,
    boxSizing: 'border-box'
  }
}))

export const StyledIconButton = styled(IconButton)(({ theme, padding }) => ({
  padding: padding || 0
}))

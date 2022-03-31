import { styled, TableHead } from '@mui/material'

export const StyledTableHead = styled(TableHead)(({ theme, type }) => ({
  backgroundColor: type === 'default'
    ? theme.colors.gunmetalBlue
    : theme.colors.neutralLightBlue,
  '& .MuiTableCell-root': {
    color: type === 'default'
      ? theme.colors.white
      : theme.colors.gunmetalBlue,
    fontWeight: 500
  }
}))

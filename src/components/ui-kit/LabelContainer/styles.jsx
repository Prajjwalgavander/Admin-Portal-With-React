import { Box, styled } from '@mui/material'

export const FilterContainer = styled(Box)(({ theme, type }) => ({
  display: 'flex',
  alignItems: 'baseline',
  padding: type !== 'dateFilter' ? '0.5% 1%' : '3%',
  border: '1px solid',
  justifyContent: 'space-around',
  borderColor: theme.palette.primary.main,
  borderRadius: 5,
  width: 'fit-content',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  background: theme.colors.white
}))

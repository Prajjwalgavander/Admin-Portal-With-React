import { MenuItem, Select, styled } from '@mui/material'

export const StyledSelect = styled(Select)(({ theme, type }) => ({
  borderRadius: '3px',
  border: 0,
  '& .MuiInputBase-input': {
    padding: type !== 'filter' ? 12 : 4
  },
  '& .MuiSelect-select': {
    fontSize: type === 'filter' ? 12 : 16
  },
  '& .MuiOutlinedInput-notchedOutline': {
    ...(type === 'filter' ? { border: 0, borderRadius: '3px' } : {})
  },
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  }
}))

export const StyledMenuItem = styled(MenuItem)(({ theme, styled, type }) => ({
  '&.MuiMenuItem-root': {
    display: 'flex',
    justifyContent: 'center',
    margin: '6px',
    ml: type !== 'filter' ? 26 : 0,
    fontSize: type === 'filter' ? 12 : 16,
    marginRight: type !== 'filter' ? 26 : 3,
    marginLeft: type !== 'filter' ? 26 : 3,
    borderRadius: '22px',
    color: styled ? 'black' : theme.palette.primary.light,
    '&:hover': {
      background: styled ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.04)',
      color: styled ? theme.colors.white : theme.palette.primary.light
    }
  }
  // '&.MuiMenuItem-root.Mui-selected': {
  //   background: theme.palette.primary.main,
  //   color: (theme) => theme.colors.white,
  //   borderRadius: '22px'
  // }
}))

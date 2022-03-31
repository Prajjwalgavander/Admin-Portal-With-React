import { styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme, error, labeltype }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: labeltype !== 'filter' && labeltype !== 'dateFilter'
      ? theme.colors.white
      : theme.colors.lighterGrey
  },
  '& .MuiInputBase-input': {
    padding: labeltype !== 'filter' && labeltype !== 'dateFilter' ? 12 : 4
  },
  '& .MuiOutlinedInput-root': {
    ...(labeltype !== 'default' &&
      {
        '& fieldset': {
          border: 'none'
        }
      }
    ),

    '&:hover fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? theme.palette.primary.error : theme.palette.primary.main,
      borderWidth: '1px'
    }
  },
  ...(labeltype === 'dateFilter' ? { width: '220px' } : {})
}))

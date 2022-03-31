import { Switch, styled, FormControlLabel } from '@mui/material'

export const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme, checked }) => ({
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    backgroundColor: theme.colors.white
  },
  '& .MuiSwitch-switchBase': {
    '& + .MuiSwitch-track': {
      opacity: 1,
      ...(!checked && { backgroundColor: theme.palette.error.main })
    },
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        opacity: 1
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    }
  }

}))

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme, checked }) => ({
  '&.MuiFormControlLabel-root': {
    marginLeft: 0,
    color: checked ? theme.palette.success.main : theme.palette.error.main
  },
  '& .MuiTypography-root': {
    fontWeight: 600,
    minWidth: '70px'
  }
}))

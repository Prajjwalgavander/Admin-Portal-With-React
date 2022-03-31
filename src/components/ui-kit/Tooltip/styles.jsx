import { styled, Tooltip, tooltipClasses } from '@mui/material'

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, type }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    color: type === 'error'
      ? theme.palette.error.main
      : theme.palette.primary.main
  }
}))

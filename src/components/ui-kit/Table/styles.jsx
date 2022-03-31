import { TableCell, TableContainer, TableRow, styled } from '@mui/material'

export const StyledTableContainer = styled(TableContainer)(({ theme, type, loading }) => ({
  borderRadius: type === 'default'
    ? '15px 15px 0px 0px'
    : 0,
  opacity: loading ? 0.5 : 1
}))

export const StyledTableCell = styled(TableCell)(({ theme, cellin = 'body', type = 'default' }) => ({
  borderRight: `1px solid ${theme.colors.grey}`,
  fontWeight: cellin === 'header' ? 500 : 300,
  height: '50px',
  maxWidth: '150px',
  overflow: 'hidden',
  borderBottom: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...(cellin === 'header' && type === 'static' && { borderBottom: `2px solid ${theme.colors.black}` }),
  ...(cellin !== 'header' && { color: theme.colors.gunmetalBlue, padding: '5px 10px' })

}))

export const StyledTableRow = styled(TableRow)(({ theme, loading }) => ({
  ...(loading ? { filter: 'blur(1.5px)' } : {}),
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  },
  textAlign: 'center'
}))

export const StatusContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8%',
  alignItems: 'center'
}))

export const LoaderContainer = styled('div')(({ theme, data }) => ({
  position: 'absolute',
  ...(data
    ? {
        top: '50%',
        left: '50%'
      }
    : {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center'
      }
  )

}))

export const MessageContainer = styled('div')(({ theme }) => ({
  textAlign: 'center !important'
}))

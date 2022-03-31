import PropTypes from 'prop-types'
import { TableRow } from '@mui/material'
import { StyledTableHead } from './styles'
import { StyledTableCell } from '../styles'

const CustomTableHeader = ({ header, type }) => {
  return (
    <StyledTableHead type={type}>
      <TableRow>
        {header.map((head) => (
          <StyledTableCell
            align='center'
            key={head.label}
            type={type}
            cellin='header'
          >
            {head.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </StyledTableHead>

  )
}

export default CustomTableHeader

CustomTableHeader.defaultProps = {
  header: [],
  type: 'default'
}

CustomTableHeader.propTypes = {
  header: PropTypes.array,
  type: PropTypes.oneOf(['static', 'default'])
}

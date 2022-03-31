import PropTypes from 'prop-types'
import { Pagination, Paper, Table, TableBody } from '@mui/material'
import CustomTableHeader from './TableHead'
import {
  LoaderContainer,
  MessageContainer,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from './styles'
import CellType from './CellTable'
import { LOADER_TYPE } from 'utils/constants'
import AppLoader from '../AppLoader'

const CustomTable = ({
  header,
  rows,
  type,
  containerStyles,
  currentPage,
  totalPage,
  loading,
  onPageChange
}) => {
  return (
    <div style={{
      position: 'relative'
    }}
    >
      <StyledTableContainer
        type={type}
        component={Paper}
        size='small'
        sx={containerStyles}
      >
        <Table aria-label='simple table'>
          <CustomTableHeader header={header} type={type} />
          <TableBody>
            {
              rows.length !== 0 &&
                rows.map((row) => (
                  <StyledTableRow key={row.id} loading={loading ? 1 : 0}>
                    {header.map((head) => (
                      <StyledTableCell align='center' key={head.value}>
                        <CellType column={head} row={row} />
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))
            }
          </TableBody>
        </Table>
        {
          !loading && !rows.length &&
            <MessageContainer>
              No data avalaible
            </MessageContainer>
        }
        <LoaderContainer data={rows.length}>
          {loading && <AppLoader variant={LOADER_TYPE.SCALE} />}
        </LoaderContainer>
      </StyledTableContainer>
      {(currentPage && totalPage && onPageChange)
        ? (
          <Pagination
            sx={{ float: 'right', margin: '10px 10px 30px' }}
            page={currentPage}
            count={totalPage}
            onChange={onPageChange}
          />
          )
        : <></>}
    </div>
  )
}

export default CustomTable

CustomTable.defaultProps = {
  header: [],
  rows: [],
  type: 'default',
  loading: false,
  containerStyles: {},
  onPageChange: () => null
}

CustomTable.propTypes = {
  header: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['static', 'default']),
  onPageChange: PropTypes.func,
  loading: PropTypes.bool,
  containerStyles: PropTypes.object,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number
}

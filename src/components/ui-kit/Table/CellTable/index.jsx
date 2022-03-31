import PropTypes from 'prop-types'
import moment from 'moment'
import CircleIcon from '@mui/icons-material/Circle'
import CustomTypography from 'components/ui-kit/Typography'
import CustomSwitch from 'components/ui-kit/Switch'
import { StatusContainer } from '../styles'
import CustomButton from 'components/ui-kit/Button'

const CellType = ({ column, row }) => {
  const cellData = row[column.value]
  switch (column.type) {
    case 'status':
      return (
        <StatusContainer key={column.id}>
          <CircleIcon
            sx={{
              fontSize: 13
            }} size='small' color={cellData ? 'success' : 'error'}
          />
          <CustomTypography
            align='left'
            sx={{ fontSize: 16, width: '60px' }}
            value={cellData ? 'Active' : 'Inactive'}
          />

        </StatusContainer>
      )
    case 'switch':
      return (
        <div>
          <CustomSwitch
            id='status'
            label={!cellData ? 'UnBlocked' : 'Blocked'}
            labelPlacement='start'
            name='status'
            size='medium'
            checked={!cellData}
            onChange={() => column.switchHandler(row.player_id)}
          />
        </div>
      )
    case 'button':
      return (
        <div>
          <CustomButton
            size='small'
            onClick={() => column.onClick(row.player_id)}
          >
            {column.buttonText}
          </CustomButton>
        </div>
      )
    case 'date':
      return (
        <CustomTypography value={moment(cellData).format('MMM Do YYYY , HH:mm')} />
      )

    default:
      return cellData
  }
}

export default CellType

CellType.defaultProps = {
  column: {},
  rows: {}
}

CellType.propTypes = {
  column: PropTypes.object.isRequired,
  rows: PropTypes.object.isRequired
}

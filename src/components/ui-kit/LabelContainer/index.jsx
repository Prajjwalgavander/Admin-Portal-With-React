import PropTypes from 'prop-types'
import CustomTypography from '../Typography'
import { FilterContainer } from './styles'

const LabelContainer = ({ children, type, label }) => {
  return (
    type !== 'filter' && type !== 'dateFilter'
      ? (
        <div style={{ width: 'fit-content', height: '100px' }}>
          <div style={{ textAlign: 'start' }}>
            <CustomTypography sx={{ color: (theme) => theme.colors.gunmetalBlue }} variant='subtitle1' value={`${label}*`} />
          </div>
          {children}
        </div>)
      : (
        <FilterContainer type={type}>
          <div style={{ marginRight: '10px', width: 'max-content' }}>
            <CustomTypography sx={{ color: (theme) => theme.colors.gunmetalBlue }} variant='subtitle1' value={`${label}`} />
          </div>
          {children}
        </FilterContainer>)

  )
}

export default LabelContainer

LabelContainer.defaultProps = {
  type: 'default',
  label: ''
}

LabelContainer.propTypes = {
  type: PropTypes.oneOf(['filter', 'default', 'dateFilter']),
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

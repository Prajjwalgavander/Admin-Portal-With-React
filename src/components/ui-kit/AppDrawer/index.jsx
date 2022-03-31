import PropTypes from 'prop-types'
import { Box, Divider } from '@mui/material'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './styles'
import CustomTypography from 'components/ui-kit/Typography'
import { SideArrowIcon } from 'components/ui-kit/icons/iconComponents/SideArrowIcon'

const AppDrawer = ({
  children,
  openDrawer = true,
  handleDrawer = () => {},
  text = 'Default',
  isMobileView
}) => {
  return (
    <StyledDrawer
      anchor='left'
      variant={isMobileView ? 'temporary' : 'persistent'}
      open={openDrawer}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value={text}
          />
        </DrawerHeader>
        <StyledIconButton padding='0px' onClick={handleDrawer}>
          <SideArrowIcon />
        </StyledIconButton>
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        <Divider />
        {children}
      </Box>
    </StyledDrawer>
  )
}

export default AppDrawer

AppDrawer.defaultProps = {
  openDrawer: true,
  handleDrawer: () => {},
  isMobileView: false
}

AppDrawer.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isMobileView: PropTypes.bool
}

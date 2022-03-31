import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { routerList } from 'routes/routerList'
import { useSidebarController } from './controller/useSidebarController'
import CustomList from './components/CustomList'
import AppDrawer from 'components/ui-kit/AppDrawer'
import ContactInfo from 'pages/ContactInfo'
import { handleDrawerToggle } from 'redux-thunk/redux/Ham/hamSlice'

const Sidebar = ({ isMobileView, isSideBarOpen, toggleSideNavbar }) => {
  const {
    t,
    location,
    expandedMenuItem,
    handleDrawerOptions
  } = useSidebarController()

  return (
    <AppDrawer
      openDrawer={isSideBarOpen}
      handleDrawer={toggleSideNavbar}
      text={t('admin')}
      isMobileView={isMobileView}
    >
      <Box>
        <CustomList
          t={t}
          location={location}
          list={routerList}
          handleDrawerOptions={handleDrawerOptions}
          expandedMenuItem={expandedMenuItem}
        />
        <ContactInfo t={t} />
      </Box>
    </AppDrawer>
  )
}

const mapStateToProps = (state) => {
  return {
    isSideBarOpen: state.ham.openHam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideNavbar: () => dispatch(handleDrawerToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

Sidebar.defaultProps = {
  isMobileView: false,
  isSideBarOpen: true
}

Sidebar.propTypes = {
  isMobileView: PropTypes.bool,
  isSideBarOpen: PropTypes.bool,
  toggleSideNavbar: PropTypes.func.isRequired
}

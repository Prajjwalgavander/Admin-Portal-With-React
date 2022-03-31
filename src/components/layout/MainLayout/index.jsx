import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, Toolbar } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { connect } from 'react-redux'
import { handleDrawerHamValue } from 'redux-thunk/redux/Ham/hamSlice'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Main, StyledBox, StyledMainLayoutChildren } from './styles'

const MainLayout = ({ children, isSideNavOpen, handleDrawerToggle }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  useEffect(() => {
    if (matches) {
      handleDrawerToggle(false)
    }
  }, [matches, handleDrawerToggle])

  return (
    <StyledBox display='flex'>
      <CssBaseline />
      <Header />
      <Sidebar isMobileView={matches} />
      <StyledBox
        component={Main}
        open={!matches ? isSideNavOpen : true}
        flexGrow={1}
        padding={3}
        height='100vh'
      >
        <Toolbar />
        <StyledMainLayoutChildren>
          {children}
        </StyledMainLayoutChildren>
      </StyledBox>
    </StyledBox>
  )
}

MainLayout.defaultProps = {
  children: 'null'

}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  isSideNavOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isSideNavOpen: state.ham.openHam
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerToggle: (value) => dispatch(handleDrawerHamValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)

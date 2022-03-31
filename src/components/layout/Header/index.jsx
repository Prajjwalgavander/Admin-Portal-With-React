import PropTypes from 'prop-types'
import MenuIcon from '@mui/icons-material/Menu'
import AppHeader from 'components/ui-kit/AppHeader'
import { connect } from 'react-redux'
import LanguageMenu from './components/LanguageMenu'
import ProfileMenu from './components/ProfileMenu'
import Notification from './components/Notification'
import { RightSideOptionContainer, StyledIconButton } from './styles'
import { handleDrawerToggle } from 'redux-thunk/redux/Ham/hamSlice'

const Header = ({ isSideNavOpen, handleDrawerToggle }) => {
  return (
    <AppHeader
      openDrawer={isSideNavOpen}
      handleDrawer={handleDrawerToggle}
      left={
        !isSideNavOpen
          ? (
            <StyledIconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
              edge='start'
              mr={2}
            >
              <MenuIcon />
            </StyledIconButton>
            )
          : <></>
      }
      right={
        <RightSideOptionContainer>
          <LanguageMenu />
          <Notification />
          <ProfileMenu />
        </RightSideOptionContainer>
      }
    />
  )
}

Header.propTypes = {
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
    handleDrawerToggle: () => dispatch(handleDrawerToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import AppRoutes from 'routes'
import { styled } from '@mui/material'
import { connect } from 'react-redux'
import AppLoader from 'components/ui-kit/AppLoader'
import AppToaster from 'components/ui-kit/AppToaster'
import { LOADER_TYPE } from 'utils/constants'

const App = ({ pageLoading }) => {
  return (
    <>
      {
        pageLoading &&
          <StyledLoaderDiv>
            <AppLoader variant={LOADER_TYPE.SCALE} />
          </StyledLoaderDiv>
      }
      <StyledBodyContainer pageloading={pageLoading ? 1 : 0}>
        <AppToaster />
        <AppRoutes />
      </StyledBodyContainer>
    </>
  )
}

const StyledLoaderDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'grid',
  placeItems: 'center',
  zIndex: 1
}))

const StyledBodyContainer = styled('div')(({ theme, pageloading }) => (pageloading
  ? {
      '-webkit-filter': 'blur(5px)',
      '-moz-filter': 'blur(5px)',
      '-ms-filter': 'blur(5px)',
      '-o-filter': 'blur(5px)',
      filter: 'blur(5px)'
    }
  : {}))

const mapStateToProps = (state) => {
  return {
    pageLoading: state.loader.pageLoader
  }
}

export default connect(mapStateToProps)(App)

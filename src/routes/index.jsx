import { styled } from '@mui/material'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppLoader from 'components/ui-kit/AppLoader'
import { LOADER_TYPE } from 'utils/constants'
import CustomRoutes from './routes'

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={
        <StyledLoaderDiv>
          <AppLoader variant={LOADER_TYPE.SCALE} />
        </StyledLoaderDiv>
       }
      >
        <CustomRoutes />
      </Suspense>
    </Router>
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

export default Routes

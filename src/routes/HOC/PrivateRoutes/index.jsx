import React from 'react'
import MainLayout from 'components/layout/MainLayout'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ Component, isAuthenticated }) => {
  return isAuthenticated
    ? (
      <MainLayout>
        <Component />
      </MainLayout>
      )
    : <Navigate to='/login' />
}

export default PrivateRoute

import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuthToken } from 'utils/common-services/cookie.services'
import { ROUTE_PATHS } from 'utils/constants'

const NotFound = () => {
  const auth = getAuthToken()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === ROUTE_PATHS.rootPath) {
      if (auth) {
        navigate(ROUTE_PATHS.dashboard, {
          replace: true
        })
      } else {
        navigate(ROUTE_PATHS.login, {
          replace: true
        })
      }
    }
  }, [auth, navigate, pathname])

  return (
    <Box sx={{ pt: 2, m: 'auto', maxWidth: '100%', height: '610px' }}>
      <img src='images/404_not_found.jpg' alt='Not Found Page' />
    </Box>
  )
}

export default NotFound

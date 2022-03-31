import React, { Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerList } from 'routes/routerList'
import RouteValidator from './RouteValidator'

const NotFound = lazy(() => import('components/layout/NotFound'))

let allRoutes = []
routerList.forEach(section => {
  section.sectionChilds.forEach(route => {
    if (route.subMenus.length) {
      allRoutes = [...allRoutes, ...route.subMenus]
    }
    allRoutes.push(route)
  })
})

const CustomRoutes = () => (
  <>
    <Routes>
      {allRoutes.map(({ path, key, ...props }) => {
        return (
          <Route
            path={path}
            key={key}
            exact
            element={<RouteValidator path={path} {...props} />}
          />
        )
      })}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </>
)

export default CustomRoutes

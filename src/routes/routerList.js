import { lazy } from 'react'
import LoginIcon from '@mui/icons-material/Login'
import { DashboardIcon } from 'components/ui-kit/icons/iconComponents/DashboardIcon'
import { EllipseIcon } from 'components/ui-kit/icons/iconComponents/EllipseIcon'
import { GameIcon } from 'components/ui-kit/icons/iconComponents/GameIcon'
import { ProfileIcon } from 'components/ui-kit/icons/iconComponents/ProfileIcon'
import { ROUTE_PATHS } from 'utils/constants'
import { v4 as uuidv4 } from 'uuid'

export const routerList = [
  {
    id: uuidv4(),
    sectionName: 'home',
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'dashboard',
        path: ROUTE_PATHS.dashboard,
        component: lazy(() => import('pages/Dashboard')),
        hasAuth: true,
        hasSideBarOption: true,
        icon: DashboardIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: null,
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'login',
        path: ROUTE_PATHS.login,
        component: lazy(() => import('pages/Auth/Login')),
        hasAuth: false,
        hasSideBarOption: false,
        icon: LoginIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'forgotPasssword',
        path: ROUTE_PATHS.forgotPassword,
        component: lazy(() => import('pages/Auth/ForgotPassword')),
        hasAuth: false,
        hasSideBarOption: false,
        icon: LoginIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: null,
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'profile',
        path: ROUTE_PATHS.profile,
        component: lazy(() => import('pages/Profile')),
        hasAuth: true,
        hasSideBarOption: false,
        icon: ProfileIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'settings',
        path: ROUTE_PATHS.settings,
        component: lazy(() => import('pages/Settings')),
        hasAuth: true,
        hasSideBarOption: false,
        icon: EllipseIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'change-password',
        path: ROUTE_PATHS.changePassword,
        component: lazy(() => import('pages/Auth/ChangePassword')),
        hasAuth: true,
        hasSideBarOption: false,
        icon: EllipseIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: 'reports',
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'games',
        path: ROUTE_PATHS.games,
        component: lazy(() => import('pages/Games/PerRoundReport')),
        hasAuth: true,
        hasSideBarOption: true,
        icon: GameIcon,
        subMenus: [
          {
            key: uuidv4(),
            label: 'perRoundReports',
            path: ROUTE_PATHS.perRoundReportReports,
            component: lazy(() => import('pages/Games/PerRoundReport')),
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'cancelledGames',
            path: ROUTE_PATHS.cancelledGames,
            component: lazy(() => import('pages/Games/CancelledGames')),
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          }
        ]
      }
    ]
  }
]

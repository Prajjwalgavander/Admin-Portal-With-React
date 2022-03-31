import React from 'react'
import { Box } from '@mui/material'
import { DashboardIcon } from './iconComponents/DashboardIcon'
import { EllipseIcon } from './iconComponents/EllipseIcon'
import { EnglishIcon } from './iconComponents/EnglishIcon'
import { FrenchIcon } from './iconComponents/FrenchIcon'
import { GameIcon } from './iconComponents/GameIcon'
import { GermanIcon } from './iconComponents/GermanIcon'
import { Login1Icon } from './iconComponents/Login1Icon'
import { LoginBg2Icon } from './iconComponents/LoginBg2Icon'
import { LogoutIcon } from './iconComponents/LogoutIcon'
import { MailIcon } from './iconComponents/MailIcon'
import { NotificationIcon } from './iconComponents/NotificationIcon'
import { PhoneIcon } from './iconComponents/PhoneIcon'
import { PortugalIcon } from './iconComponents/PortugalIcon'
import { ProfileIcon } from './iconComponents/ProfileIcon'
import { RussianIcon } from './iconComponents/RussianIcon'
import { SettingIcon } from './iconComponents/SettingIcon'
import { SideArrowIcon } from './iconComponents/SideArrowIcon'
import { SpanishIcon } from './iconComponents/SpanishIcon'

export default {
  title: 'atoms/icons'
}

const Row = props => <Box p={2} {...props} />
const Cell = props => <Box display='inline-block' m={1} {...props} style={{ cursor: 'pointer' }} />

export const icons = () => (
  <Box>
    <Row>
      <Cell><DashboardIcon title='DashboardIcon' width={40} height={40} /></Cell>

      <Cell><EllipseIcon title='EllipseIcon' width={40} height={40} /></Cell>

      <Cell><EnglishIcon title='EnglishIcon' width={40} height={40} /></Cell>

      <Cell><FrenchIcon title='FrenchIcon' width={40} height={40} /></Cell>

      <Cell><GameIcon title='GameIcon' width={40} height={40} /></Cell>

      <Cell><GermanIcon title='GermanIcon' width={40} height={40} /></Cell>

      <Cell><Login1Icon title='Login1Icon' width={40} height={40} /></Cell>

      <Cell><LoginBg2Icon title='LoginBg2Icon' width={40} height={40} /></Cell>

      <Cell><LogoutIcon title='LogoutIcon' width={40} height={40} /></Cell>

      <Cell><MailIcon title='MailIcon' width={40} height={40} /></Cell>

      <Cell><NotificationIcon title='NotificationIcon' width={40} height={40} /></Cell>

      <Cell><PhoneIcon title='PhoneIcon' width={40} height={40} /></Cell>

      <Cell><PortugalIcon title='PortugalIcon' width={40} height={40} /></Cell>

      <Cell><ProfileIcon title='ProfileIcon' width={40} height={40} /></Cell>

      <Cell><RussianIcon title='RussianIcon' width={40} height={40} /></Cell>

      <Cell><SettingIcon title='SettingIcon' width={40} height={40} /></Cell>

      <Cell><SideArrowIcon title='SideArrowIcon' width={40} height={40} /></Cell>

      <Cell><SpanishIcon title='SpanishIcon' width={40} height={40} /></Cell>
    </Row>
  </Box>
)

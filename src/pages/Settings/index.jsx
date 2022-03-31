import React from 'react'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChangePasswordLinkContainer, RootContainer } from './styles'
import CustomTypography from 'components/ui-kit/Typography'

const Settings = () => {
  const { t } = useTranslation()

  return (
    <RootContainer>
      <Card
        sx={{
          width: '600px',
          display: 'inline-grid',
          justifyContent: 'center',
          padding: '40px',
          marginTop: '50px',
          textAlign: 'center'
        }}
      >
        <CustomTypography
          value={t('settings')}
          variant='h3'
          sx={{ marginBottom: '15px' }}
        />
        <ChangePasswordLinkContainer>
          <Link to='/change-password' style={{ textDecoration: 'none' }}>
            <CustomTypography
              value={t('changePassword')}
              variant='h6'
            />
          </Link>
        </ChangePasswordLinkContainer>

      </Card>
    </RootContainer>
  )
}

export default Settings

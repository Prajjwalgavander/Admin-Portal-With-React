import PropTypes from 'prop-types'
import CustomTypography from 'components/ui-kit/Typography'
import { MailIcon } from 'components/ui-kit/icons/iconComponents/MailIcon'
import { PhoneIcon } from 'components/ui-kit/icons/iconComponents/PhoneIcon'
import { StyledAnchor } from './styles'
import CustomListItem from 'components/layout/Sidebar/components/CustomListItem'

const ContactInfo = ({ t }) => {
  return (
    <>
      <CustomTypography
        align='left'
        value={t('customerSupport')}
        sx={{
          fontWeight: 600,
          textTransform: 'uppercase',
          display: 'block',
          padding: '10px 0px 10px 18px',
          color: theme => theme.colors.lightPurple
        }}
      />
      <StyledAnchor href='tel:+1-888-000-999'>
        <CustomListItem
          sx={{
            color: (theme) => theme.colors.white,
            '&:hover': {
              backgroundColor: (theme) =>
                `${theme.colors.gunmetalBlue} !important`
            }
          }}
          icon={<PhoneIcon />}
          text={t('+1-888-000-999')}
          iconStyle={{
            '& .MuiSvgIcon-root': {
              fill: (theme) => theme.colors.white
            }
          }}
        />
      </StyledAnchor>

      <StyledAnchor href='mailto:support@fg.com'>
        <CustomListItem
          sx={{
            color: (theme) => theme.colors.white,
            '&:hover': {
              backgroundColor: (theme) =>
                `${theme.colors.gunmetalBlue} !important`
            }
          }}
          icon={<MailIcon />}
          text={t('support@fg.com')}
          iconStyle={{
            '& .MuiSvgIcon-root': {
              fill: (theme) => theme.colors.white
            }
          }}
        />
      </StyledAnchor>
    </>
  )
}

ContactInfo.propTypes = {
  t: PropTypes.func.isRequired
}
export default ContactInfo

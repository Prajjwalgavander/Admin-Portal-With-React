import { MenuItem } from '@mui/material'
import { LANGUAGES } from 'utils/constants'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledIconButton, StyledMenu } from 'components/layout/Header/styles'
import { StyledTooltip } from 'components/ui-kit/Tooltip/styles'

const LanguageMenu = () => {
  const {
    anchorElLanguage,
    selectedLanguage,
    toggleLanguageMenu,
    changeLanguage
  } = useHeaderController()
  const SelectedFlag = LANGUAGES.find(item => item.languageCode === selectedLanguage).flag

  return (
    <>
      <StyledIconButton onClick={toggleLanguageMenu}>
        <SelectedFlag height={20} width={30} />
      </StyledIconButton>
      <StyledMenu
        mt='45px'
        id='menu-appbar'
        anchorEl={anchorElLanguage}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElLanguage)}
        onClose={(e) => toggleLanguageMenu(e, true)}
      >
        {LANGUAGES.map((language) => {
          const Flag = language.flag
          return (
            <MenuItem
              key={language.label}
              onClick={() => changeLanguage(language.languageCode)}
              selected={language.languageCode === selectedLanguage}
            >
              <StyledTooltip
                placement='right-start'
                title={language.label}
                arrow
              >
                <Flag height={20} width={30} />
              </StyledTooltip>
            </MenuItem>
          )
        })}
      </StyledMenu>
    </>
  )
}

export default LanguageMenu

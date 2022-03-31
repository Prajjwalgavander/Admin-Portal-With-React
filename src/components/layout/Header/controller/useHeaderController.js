import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from 'utils/constants'
import { getLocalLanguage, setLocalLanguage } from 'utils/common-services/localstorage.services'

const NAV_MENU_OPTIONS = {
  logout: 'logout',
  settings: 'settings',
  profile: 'profile'
}

export const useHeaderController = () => {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElLanguage, setAnchorElLanguage] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(
    getLocalLanguage() || LANGUAGES[0].languageCode
  )

  const toggleUserMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElUser(null)
    } else {
      setAnchorElUser(event.currentTarget)
    }
  }

  const toggleLanguageMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElLanguage(null)
    } else {
      setAnchorElLanguage(event.currentTarget)
    }
  }

  const changeLanguage = (lang) => {
    setAnchorElLanguage(null)
    setLocalLanguage(lang)
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  return {
    anchorElUser,
    anchorElLanguage,
    selectedLanguage,
    changeLanguage,
    toggleUserMenu,
    toggleLanguageMenu,
    t,
    navigate,
    NAV_MENU_OPTIONS,
    setAnchorElUser
  }
}

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export const useSidebarController = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const [expandedMenuItem, setExpandedMenuItem] = useState([])

  const handleDrawerOptions = (label) => {
    const isAlreadyExpanded = expandedMenuItem.includes(label)
    if (isAlreadyExpanded) {
      // Shrink that menu list
      setExpandedMenuItem((prev) => prev.filter((item) => item !== label))
    } else {
      // Expand that menu list
      setExpandedMenuItem(prev => prev.concat(label))
    }
  }

  return {
    t,
    location,
    expandedMenuItem,
    handleDrawerOptions
  }
}

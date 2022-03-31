import PropTypes from 'prop-types'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const CustomListItem = ({
  item,
  onClick,
  selected,
  text,
  icon,
  to,
  isbutton,
  expandless,
  component,
  hasSubMenu,
  iconStyle,
  ...otherProps
}) => {
  return (
    <ListItem
      button={Boolean(isbutton)}
      to={to}
      component={component}
      onClick={onClick}
      selected={selected}
      {...otherProps}
    >
      <ListItemIcon sx={iconStyle}>
        {icon && icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {hasSubMenu
        ? expandless ? (<ExpandLess />) : (<ExpandMore />)
        : <></>}
    </ListItem>
  )
}

CustomListItem.defaultProps = {
  isbutton: true,
  onClick: () => {},
  text: '',
  selected: false
}

CustomListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string,
  isbutton: PropTypes.bool,
  expandless: PropTypes.bool,
  component: PropTypes.object,
  hasSubMenu: PropTypes.bool,
  iconStyle: PropTypes.object
}

export default CustomListItem

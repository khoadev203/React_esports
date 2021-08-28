// ** React Imports
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// ** Horizontal Menu Array
import navigation from '@src/navigation/vertical'

// ** Horizontal Menu Components
import NavItems from './NavItems'

// ** Theme Configs
import themeConfig from '@configs/themeConfig'

// ** React Custom Imports
import UserDropdown from './UserDropdown'

const Navbar = ({ currentActiveItem, routerProps, setMenuVisibility }) => {
  // ** States
  const [activeItem, setActiveItem] = useState(null)
  const [groupActive, setGroupActive] = useState([])
  const [openDropdown, setOpenDropdown] = useState([])

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = id => {
    const arr = openDropdown
    arr.push(id)
    setOpenDropdown([...arr])
  }
  
  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = id => {
    const arr = openDropdown
    arr.splice(arr.indexOf(id), 1)
    setOpenDropdown([...arr])
  }

  return (
    <div className='navbar-container main-nav-content d-flex justify-content-between'>
      <NavLink to='/' className='logo-panel'>
        <img src={themeConfig.app.appLogoImage} alt={themeConfig.app.appName} height={75} />
      </NavLink>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        {/* <NavItem className='mr-auto mobile-menu'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem> */}
      </ul>
      <ul className='nav navbar-nav' id='main-navigation'>
        <NavItems
          submenu={false}
          items={navigation}
          activeItem={activeItem}
          groupActive={groupActive}
          routerProps={routerProps}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          openDropdown={openDropdown}
          setActiveItem={setActiveItem}
          setGroupActive={setGroupActive}
          setOpenDropdown={setOpenDropdown}
          currentActiveItem={currentActiveItem}
        />
      </ul>
      <div className='user-panel'>
        <UserDropdown />
      </div>
    </div>
  )
}

export default Navbar

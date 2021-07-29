import React, { useState } from 'react'
import '../styles/Header.css'
import { Link, NavLink } from 'react-router-dom'
import { menus } from './HeaderData'

function Header() {
  const [menuIconClicked, setMenuIconClicked] = useState(false)
  function handleClickIcon() {
    setMenuIconClicked(!menuIconClicked)
  }
  const menuData = menus.map((menu) => (
    <li key={menu.id} className={menu.cName}>
      <NavLink activeClassName='active' exact to={menu.path}>
        {menu.name}
      </NavLink>
    </li>
  ))

  return (
    <div className='Navbar'>
      <div className='logo'>
        <Link to='/'>
          <h4>
            <span>
              <i className='fas fa-hospital-symbol' />
            </span>
            IIAM HEALTH SOLUTION
          </h4>
        </Link>
      </div>
      <div className='menu'>
        {/* humburger menu icon */}
        {/* <div className='menu-icon' onClick={handleClickIcon}>
          <i className={menuIconClicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div> */}
        <ul className='menuItems'>{menuData}</ul>
      </div>
    </div>
  )
}
export default Header

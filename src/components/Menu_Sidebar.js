import React, {useEffect} from 'react'
import {Link } from 'react-router-dom'
import {loadScripts} from '../_utils/index'

const Menu_Sidebar  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    })
    return( 
      <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <Link to ='/'>
          <img src="images/icon/logo.png" alt="CoolAdmin" />
        </Link>  
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li>                
              <Link to ='/'>
                  <i className="fas fa-chart-bar" />Dashboard
              </Link>
            </li>
            <li>                
                <Link to ='/Article'>
                    <i className="fas fa-chart-bar" />Article
                </Link>
              </li>
              <li>
                <Link to ='/User'>
                    <i className="fas fa-table" />User
                </Link>
              </li>                            
          </ul>
        </nav>
      </div>
    </aside>
    )
}

export default Menu_Sidebar;
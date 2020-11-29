import React, {useEffect} from 'react'
import {Link } from 'react-router-dom'


const Menu_Sidebar  = props =>{    
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
                  <i className="fas fa-tachometer-alt" />Dashboard
              </Link>
            </li>
            <li>                
                <Link to ='/article'>
                    <i className="fas fa-chart-bar" />Article
                </Link>
              </li>
              <li>
                <Link to ='/user'>
                    <i className="fas fa-table" />User
                </Link>
              </li>                            
              <li>
                <Link to ='/comment'>
                    <i className="fas fa-comments" />Comment
                </Link>
              </li>                            
          </ul>
        </nav>
      </div>
    </aside>
    )
}

export default Menu_Sidebar;
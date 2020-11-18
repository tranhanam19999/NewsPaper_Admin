import Reat from 'react'
import {Link } from 'react-router-dom'

const Menu_Sidebar = function(props){
    return( 
      <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <a href="#">
          <img src="images/icon/logo.png" alt="Cool Admin" />
        </a>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li>                
              <Link to ='/Dashboard'>
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
import React from 'react'
import {Link} from 'react-router-dom'

const Header_mobile = function(props){
    return(
        <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" href="index.html">
                <img src="images/icon/logo.png" alt="CoolAdmin" />
              </a>
              <button className="hamburger hamburger--slider" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav className="navbar-mobile">
          <div className="container-fluid">
            <ul className="navbar-mobile__list list-unstyled">
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
          </div>
        </nav>
      </header>

    )
}

export default Header_mobile;
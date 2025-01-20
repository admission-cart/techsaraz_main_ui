import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '..//../images/Tech-SaraZ-logo-300x99.webp';
import Routes from '../../Constant/routes';
import { PopUpContext } from '../../Context/ToastContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation()
  const {
    WEB_DEVELOPMENT,
    HOME,
    WORDPRESS_DEVELOPMENT,
    ECOMMERCE_DEVELOPMENT,
    UI_UX_DESIGN,
    SOCIAL_MARKETING,
    SEO,
    ABOUT_US,
    BLOG,
    CONTACT,
    SERVICES,
    DIGITAL_MARKETING,
    CONTENT_WRITING,
    GRAPHICS_DESIGN,
    WEB_APPLICATION_DEVELOPMENT,
  } = Routes;

  const {togalPopUp} = useContext(PopUpContext)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  useEffect(()=>{
    toggleMenu()
  },[location])
  return (
    <header className="main-header">
      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-icons" onClick={toggleMenu}>
          <i className="fas fa-bars" />
          <i className="fas fa-times" />
        </div>

        {/* Logo */}
        <Link to={navConfig[0].to} className="header-logo">
          <img src={LOGO} alt="Tech SaraZ Logo" />
        </Link>

        <ul className="nav-list">
          <li>
            <Link to={HOME} className="">
              Home
            </Link>
          </li>

          <li>
            <Link to={ABOUT_US}>about</Link>
          </li>
          <li>
            <Link to={SERVICES}>
              Our Services
              <i className="fas fa-caret-down"></i>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to={WEB_DEVELOPMENT}>
                  web development <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      to={`${WEB_DEVELOPMENT}/${WEB_APPLICATION_DEVELOPMENT}`}
                    >
                      web applicaion development
                    </Link>
                  </li>
                  <li>
                    <Link to={`${WEB_DEVELOPMENT}/${WORDPRESS_DEVELOPMENT}`}>
                      wordpress development
                    </Link>
                  </li>
                  <li>
                    <Link to={`${WEB_DEVELOPMENT}/${ECOMMERCE_DEVELOPMENT}`}>
                      e-commerce
                    </Link>
                  </li>
                  <li>
                    <Link to={`${WEB_DEVELOPMENT}/${UI_UX_DESIGN}`}>
                      ui and ux design
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={DIGITAL_MARKETING}>
                  Digital marketing <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to={`${DIGITAL_MARKETING}/${SOCIAL_MARKETING}`}>
                      social media marketing
                    </Link>
                  </li>
                  <li>
                    <Link to={`${DIGITAL_MARKETING}/${SEO}`}>Seo services</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={CONTENT_WRITING}>content writing</Link>
              </li>
              <li>
                <Link to={GRAPHICS_DESIGN}>graphics design</Link>
              </li>
            </ul>
          </li>
          {/* <li>
              <Link to="/portfolio">portfolio</Link>
          </li> */}
          <li>
            <Link to={BLOG}>Blog</Link>
          </li>
          <li>
            <Link to={CONTACT}>Contact</Link>
          </li>

          <li className="humberger-menu-button">
            <Link className="humberger-menu-button-btn-btn" onClick={()=>togalPopUp(true)}>
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Main Header Button */}
        <div className="header-btn">
          <Link className="header-btn-btn" onClick={()=>togalPopUp(true)}>
            CONTACT US
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

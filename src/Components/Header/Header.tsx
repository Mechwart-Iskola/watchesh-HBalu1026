import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  const toggleNavMenu = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const toggleCart = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  return (
    <>
      <header className="header" id="header">
        <nav>
          <a href="#" className="nav__logo">
            <i className="bx bxs-watch nav__logo-icon"></i> Rolex
          </a>
          <div className={`nav__menu ${isNavOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#featured" className="nav__link">Featured</a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">Products</a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">New</a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleNavMenu}>
              <i className="bx bx-x"></i>
            </div>
          </div>
          <div className="nav__btns">
            <i
              className="bx bx-moon change-theme"
              id="theme-button"
              onClick={toggleTheme}
            ></i>
            <div className="nav__shop" id="cart-shop" onClick={toggleCart}>
              <i className="bx bx-shopping-bag"></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleNavMenu}>
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
      {/* Show Cart if the cart icon is clicked */}
      {isCartVisible && <Cart />}
    </>
  );
};

export default Header;
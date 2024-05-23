import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../Assets/img/logo.svg';
import yershari from '../Assets/img/yershari.png';
import './Header.css';

function App() {
  const [headerStyle, setHeaderStyle] = useState({
    position: 'static',
    backgroundColor: 'transparent',
  });

  const handleScroll = () => {
    const newStyle = window.scrollY > 0
      ? { position: 'fixed', top: '0', backgroundColor: 'white', zIndex: 1000, width: '100%' }
      : { position: 'static', backgroundColor: 'transparent' };

    setHeaderStyle(newStyle);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header style={headerStyle} className='header'>
        <div className="container">
          <nav className="nav">
            <ul className="nav__left">
              <li>
                <img className="logo" src={logo} alt="Logo" />
              </li>
            </ul>
            <ul className="nav__list">
              <li className='nav__item'>
                <Link to="hero" smooth={true} duration={1000}>
                  Why Oneflow?
                </Link>
              </li>
              <li className='nav__i tem'>
                <Link to="jooin" smooth={true} duration={1000}>
                  Learn
                </Link>
              </li>
              <li className='nav__item'>
                <Link to="colobrate" smooth={true} duration={1000}>
                  Pricing
                </Link>
              </li>
              <li className='nav__item'>
                <Link to="eyes" smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li className='nav__item'>
                <Link to="footer" smooth={true} duration={1000}>
                  Blog
                </Link>
              </li>
            </ul>
            <div className="nav__right">
              <button className="button__demo">Get a demo</button>
              <button className="button__in">Log in</button>
              <img className='yer' src={yershari} alt="Yershari" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;

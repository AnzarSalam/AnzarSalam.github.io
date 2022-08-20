import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/nav.css'

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <Link to='/' className='nav-brand'>
          <img src='brand.png' className='nav-logo' alt='brand logo' />
        </Link>

        <div className='nav-right'>
          <ul className='nav-item-wrapper'>
            <li className='nav-item'>
              <Link className='nav-link' to='/home'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

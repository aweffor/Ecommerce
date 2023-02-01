import React from 'react';
import Logo from '../../Images/logo.png';
import {MdOutlineShoppingCart} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <nav className='nav'>
          <div className='left'>
            <Link to="/">
              <img className='logo' src={Logo}/>
            </Link>
          </div>
          <div className='right'>
              <li><Link to="/cart"><MdOutlineShoppingCart className='icon'/></Link></li>
              <li><MdFavoriteBorder onClick={()=>alert('გთხოვთ გაიარეთ ავტორიზაცია')} className='icon'/></li>
              <li><FaRegUserCircle className='icon'/></li>
              <li>
                
              </li>
          </div>
      </nav>
      <nav className='nav-bottom'>
        <li>მთავარი გვერდი</li>
        <li>ქალი</li>
        <li>მამაკაცი</li>
        <li>ბავშვი</li>
        <li>კონტაქტი</li>
      </nav>
    </>
  )
}

export default Header
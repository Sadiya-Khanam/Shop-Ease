import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp';
import cart_icon from '../../assets/cart_icon.png';
import wishlist_icon from '../../assets/wishlist.png'; // Add this icon in your assets
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import profile_icon from '../../assets/Profile.jpg';


const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartItems, wishlistItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' height='50px' />
        <p>ShopEase</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu('home')}>
          <Link to='/' style={{ textDecoration: 'none', color: '#626262' }}>
            Home
          </Link>
          {menu === 'home' && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to='/mens' style={{ textDecoration: 'none', color: '#626262' }}>
            Men
          </Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link to='/womens' style={{ textDecoration: 'none', color: '#626262' }}>
            Women
          </Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to='/kids' style={{ textDecoration: 'none', color: '#626262' }}>
            Kids
          </Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>

        {/* Wishlist Icon */}
        <Link to='/wishlist'>
          <img src={wishlist_icon} alt='Wishlist' height='35px' style={{ marginRight: '10px' }} />
        </Link>
        <div className='nav-cart-count'>{wishlistItems?.length || 0}</div>

        {/* Cart Icon */}
        <Link to='/cart'>
          <img src={cart_icon} alt='Cart' height='40px' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
       <Link to="/profile">
  <img src={profile_icon} alt="Profile" className="navbar-profile-icon" />
</Link>

      </div>
    </div>
  );
};

export default Navbar;

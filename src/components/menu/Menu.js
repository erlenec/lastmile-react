import Navbar from '../Navbar'
import'../css/dropdownmenu.css';
import albalogo from '../../assets/albalogo.png';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
            <img src = {albalogo} alt = "Alba" /> 
        </a>
        <Navbar />

        <button className='menu-button' type='button'>
            <a href="/register">Register</a>
        </button>
        
        <button className = 'menu-button' type='button' onclick="window.location.href='/login'">
            <a href="/login">Log In</a>
        </button>
        
      </div>
    </header>
    
  );
};

export default Menu;
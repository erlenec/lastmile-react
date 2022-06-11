import React from 'react';
import'./header.css';
import albalogo from '../../assets/albalogo.png';

const Header = () => (
        <nav className='header'>
            <div>
               <img src = {albalogo} alt = "Alba" /> 
            </div>
        </nav>
)
    export default Header;

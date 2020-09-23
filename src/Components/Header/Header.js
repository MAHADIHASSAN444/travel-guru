import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../travel-guru-master/Logo.png';
const Header = () => {
    return (
        <div>
         <nav>
          <ul>
            <li>
            <img className="logo" src={logo} alt=""/>
            </li>
            {/* <li> */}
              <Link to="/home">Home</Link>
            {/* </li> */}
            {/* <li> */}
              <Link to="/travelplace">Travelplace</Link>
            {/* </li> */}
            {/* <li> */}
              <Link to="/booking">Booking</Link>
            {/* </li> */}
          </ul>
        </nav>
        
        </div>
    );
};

export default Header;
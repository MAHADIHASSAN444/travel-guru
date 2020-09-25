import React from 'react';
import './Header.css';
import logo from '../../Images/Logo.png';

const Header = () => {
    return (
      <header>
              <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
              <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>

                <div>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="home">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/travelplace">travel Plase</a>
                        </li>
                        <li class="nav-item">
                            
                            <a href="/login" class="btn btn-warning" role="button">Login</a>
                        </li>
                    </ul>



                </div>
              </nav>

        </header>


    );
};

export default Header;
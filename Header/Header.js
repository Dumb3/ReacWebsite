import React from 'react';
import './Header.css';
import Navanimation from './navanimation.js';
import logo from './img-header/_-removebg-preview.png';
import {FaBars} from 'react-icons/fa';


export default function Header (){
  return(
    <>
      <header>
        <div id="header-container">
        
          <div id="logo-div">
            
            <a href="#">
              <img id ="logo"src={logo} alt="Logo Pedro.L Dev" width="70" height="70"/>
              </a>
             
          </div>
          <div id ="nav-links">
          <nav>
            <div class="dropdown">
              <button class="dropbtn" id="bar"><FaBars/></button>
              <div class="dropdown-content">
                <a class = "link-drop">Home</a>
                <a class = "link-drop" href="#who">Who am I</a>
                <a class = "link-drop" href="https://www.ers.usda.gov/data-products/u-s-food-imports/">Sources</a>
              </div>
            </div>
            <ul>
              <li><a class="link-nav bar-display" href="#who">Who am I</a></li>
              <li><a class="link-nav bar-display" href="https://www.ers.usda.gov/data-products/u-s-food-imports/">Sources</a></li>
              <li><a class="link-nav bar-display" href="#">Home</a></li>
            </ul>
          </nav>
          </div>
        </div>
        
      </header>
    </>

  );

}
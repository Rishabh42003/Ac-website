import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
        <div className='upper-part'>
          <div className='timing'>
            <p>Working Time: 8 AM - 10 PM</p>
          </div>
          <div className='contacts'>
            <p> Need Urgent Service?? Call!! <button>9326081052</button> </p>
          </div>
          <div className='logo'>
            <img src={assets.facebook_logo} alt="facebook" />
            <img src={assets.x} alt="" />
            <img src={assets.instagram_logo} alt="" />
          </div>
        </div>
        <div className='lower-part'>
          <div className='nav-left'>
            <img className='head-logo' src={assets.logo} alt="" />
          </div>
          <div className='nav-element'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <div className="dropdown">
              <button className='ddbt' href="">
                Services
              </button>
              <div className="dropdown-elements">
                <a href="/">Ac Services</a>
                <a href="/">Ac Repair</a>
                <a href="/">Ac Installation Service</a>
                <a href="/">Ac Gas Refill Service</a>
                <a href="/">Ac Annual Maintenance Service</a>
                <a href="/">Split Ac Repair andd Services</a>
                <a href="/">Window Ac Repair and Services</a>
                <a href="/">Cassette Ac Repair and Services</a>
              </div>
            </div>
            <a href="/">Privacy Policy</a>
            <a href="/">Contact</a>
            <button className='con'>
              9326081052
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
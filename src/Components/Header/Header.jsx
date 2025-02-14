import React, { useEffect, useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import './locality.json'

const selectLocality = () =>{

  const [locality, setLocality] = useState([])

  useEffect(()=>{
    const data = require('./locality.json')
    console.log(data)
    setLocality(data)
  },[])
}


const Header = () => {
  return (
    <div className='header'>
        <div className='home-head'>
            <div className='home-image'>
                <img src={assets.home_img} alt="" />
                <div className='left-part'>
                    <p className='line-1'>
                    Get all kinds and all brands of AC repair and service at your doorstep.
                    </p>
                    <hr />
                    <p className='name'>S R Cool Services</p>
                    <p className='slogan'>Believe in Great Services</p>
                    <p className='promise'>Doorsteps Services in 30 Minutes. Call Now!</p>
                    <button>9326081052</button>
                </div>

                <div className="right-part">
                    <h1>Request a Service!</h1>
                    <form>
                        <input type="text" placeholder='Your Name' required />
                        <input type="email" placeholder='Your Email' required />
                        <input type="tel" placeholder='Your Phone No' required />
                        <div className="locality">
                          <div className="1">
                            <select className="YourLocality">
                              <option value="" disabled>Your Locality</option>
                            </select>
                          </div>
                          <div className="Error">

                          </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

import './MainHeader.css'
import Image from '../../../../src/assets/images/landscape-day-bottom-image_desktop.svg'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>#100 Days of Workout</h4>
                <h1>Join The Legends Of The Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere doloribus maxime reiciendis exercitationem fuga vero sapiente mollitia alias adipisci!</p>
                <Link to="/plans" className='btn lg'>Get Started</Link>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    {/* <img src={Image} alt='Main Header Image'/> */}
                </div>
            </div>
        </div>
        <div className='bottom-section'>
            <div className='bottom-image'>
             <img src={Image} alt='bottomimg'/>

            </div>
        </div>
    </header>
  )
}

export default MainHeader
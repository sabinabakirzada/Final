import React from 'react'
import "./index.scss"
const Welcome = () => {
  return (
    <div id='welcome'>
        <div className="container">
            <div className="welcome">
              <div className="welcome-text">
                <h1 className='welcome-h1'>Welcome To EatWell</h1>
                <p className='welcome-p'>Come and eat well with our delicious & healthy foods.</p>
                <button className='welcome-btn'>Reservation</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
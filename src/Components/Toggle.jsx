import React, { useState } from 'react'
import sun from "../img/icons/sun.svg"
import moon from "../img/icons/moon.svg"
import "../styles/main.css" 


const Toggle = () => {

  const [monn,setMonn] = useState(false);

  return (
    <div>
          <button className="dark-mode-btn">
            <img src={sun} className='dark-mode-btn__icon'/>
            <img src={moon} className='dark-mode-btn__icon'/>
          </button>
    </div>
  )
}

export default Toggle
import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h2>Order your favourite food here</h2>
        <p>Choose a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and your dining experience.</p>
        <button><a href='#explore-menu'>View Menu</a></button>
      </div>
    </div>
  )
}

export default header

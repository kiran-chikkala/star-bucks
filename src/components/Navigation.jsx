import React from 'react'
import '../navigation.css'
const Navigation = () => {
  return (
    <div className='navigation'>
           <div className='main'>
        <img className='star-logo' src='/images/starbuck.png'/>
    
        <div className='nav'>
            <h4>Home</h4>
            <h4>Gift</h4>
            <h4>Order</h4>
            <h4>Pay</h4>
            <h4>Store</h4>
        <i class="ri-menu-fill"></i>
        </div>
        <div className='serach-input'>
        <i class="ri-search-2-line"></i>
        <input type='text' placeholder='Looking for something'/>
       </div>
       </div>
    </div>
  )
}

export default Navigation

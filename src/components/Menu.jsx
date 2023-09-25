import React from 'react'
import '../menu.css'
const Menu = () => {
  return (
    <div>
      <div className='third-div'>
        <h2>Handcrafted Curations</h2>
        <div className='menu'>
            <div className='sec-img'>
            <img src='/images/star/Bestseller.jpg' alt=''/>
            <p>Bestseller</p>
            </div>
            <div className='sec-img'>
            <img src='/images/star/CoffeeAtHome.jpg' alt=''/>
            <p>CoffeeAtHome</p>
            </div>
            <div  className='sec-img'>
            <img src='/images/star/Drinks.jpg' alt=''/>
            <p>Drinks</p>
            </div>
            <div  className='sec-img'>
            <img src='/images/star/Food.jpg' alt=''/>
            <p>Food</p>
            </div>
            <div  className='sec-img'>
            <img src='/images/star/Merchandise.jpg' alt=''/>
            <p>Merchandise</p>
            </div>
            <div className='sec-img'>
            <img src='/images/star/ReadyToEat.jpg' alt=''/>
            <p>ReadyToEay</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Menu

import React from 'react'
import '../image.css'
import background from  '../Image/background.image.jpg'
const Image = () => {
  return (
  <div className='main-image'>
  <div className='text'>
  <h2>Learn more about the world of coffee!</h2>
  <h6>Discover More</h6>
  </div>
  <div className='image'>
    <div className='items'>
      <span className='overlay'></span>
    <img src={background} alt='kiran'/>
<h1>The Art And Science Of Sampling Coffee </h1>  
<h5>Explore the world of coffee sampling at Starbucks and uncover the art and science behind creating the perfect cup.
</h5>
<button>Learn More</button>
</div>
  </div>
  </div>
  )
}

export default Image

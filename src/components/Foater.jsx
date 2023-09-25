import React from 'react'
import '../foater.css'
import logo from '../foater/logo.png'
import appstoreAndroid from '../foater/appstoreAndroid.png'
import appstoreios from '../foater/appstoreios.png'
import instagram from '../foater/instagram.svg'
import twitter from '../foater/twitter.svg'
import facebook from '../foater/facebook.svg'
const Foater = () => {
  return (
    <div className='main-foater'>
      <section className='section-1'>
        <div className='star-image'>
          <img src={logo} alt='image'/></div>
        <div className='aboutus'>
            <h3>About Us</h3>
            <a href="">Our Heritage</a>
            <a href="">Coffeehouse</a>
            <a href="">Our Company</a>
        </div>
        <div className='Responsibility'>
             <h3>Responsibility</h3>
        <a href="">Community</a>
        <a href="">Ethical Sourcing</a>
        <a href="">Environment</a>
        <a href="">Diversity</a>
        </div>
        <div className='QuickLinks'> 
            <h3>Quick Links</h3>
        <a href="">Privacy Policy</a>
        <a href="">Starbucks Rewards Day Offer</a>
        <a href="">Delivery</a>
        <a href="">Season's Gifting</a>
        <a href="">Careers</a>
        <a href="">Customers Service</a>
        <a href="">FAQs</a>
        </div>    
        <div> <h3>SOCIALMEDIA</h3>
<img src={instagram} alt="instagram" />
<img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
        </div>
        <span>
        <img src={appstoreAndroid} alt="kiran" /> 
        <img src={appstoreios} alt="kiran" />
        </span>
      </section>
      <section className='sec-footer'>
      <hr/>
 <ul>
  <li><a href="">Web Accessiblity</a></li>
  <div className="vertical"></div>
  <li><a href="">Privacy Statement</a></li>
  <div className="vertical"></div>
  <li> <a href="">Terms of Use</a></li>
  <div className="vertical"></div>
  <li> <a href="">Contact Us</a></li>
  <li> <a href="">© 2023 Starbucks Coffee Company. All rights reserved.</a></li>
  </ul>
      </section>
    </div>
  )
}

export default Foater

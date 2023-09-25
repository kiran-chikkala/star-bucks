import React from 'react'
import '../slider2.css'
import {data} from './Sliding';
import { MdChevronLeft,MdChevronRight} from 'react-icons/md';
const CardSlider2 = () => { 
    const scrollleft=()=>{
        var move=document.getElementById("sliders")
        move.scrollLeft=move.scrollLeft+200
    }
    const scrollRight=()=>{
        var move=document.getElementById("sliders")
        move.scrollLeft=move.scrollLeft-200
    }
  return (
    <div id='main-container'>
     <MdChevronLeft size={40} className='slider-icons left' onClick={scrollleft}/>
      <div id='sliders'> 
{
    data.map((slide,index)=>{
        return(
            <div className='card-slider'>
           <div className='inside-card'>
            <div className='part-1' >
           <div className='slider-image' style={{backgroundImage:`url(${slide.Image})`,backgroundSize:'cover',}}></div>
            <h4>₹ 204</h4>
            </div>
          <div className='part-2'>
            <h4>{slide.title}</h4>
            <button>Add Item</button>
          </div>
           </div>
            </div>
        )
    })

}
      </div>
     <MdChevronRight size={40}  className='slider-icons right'  onClick={scrollRight}/>
    
    </div>
  )
}

export default CardSlider2

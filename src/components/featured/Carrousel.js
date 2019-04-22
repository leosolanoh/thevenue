import React from 'react'

import Slider from 'react-slick'
 
import  slide_one from    '../../resources/images/fone1.jpeg'
import  slide_two from    '../../resources/images/fone2.jpeg'
import  slide_three from  '../../resources/images/fone3.jpeg'
import  slide_four from    '../../resources/images/fone4.jpeg'
import  slide_five from    '../../resources/images/fone5.jpeg'
import  slide_six from  '../../resources/images/fone6.jpeg'

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500
}

const Carrousel = () => {
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height:`${window.innerHeight}px`,
        overflow:"hidden"
      }}
    >  
    <Slider {...settings}>
        <div>
           <div className="carrousel_image"
                style={{
                  background:`url(${slide_one})`,
                  height:`${window.innerHeight}px`,
                }}           
           > </div>          
        </div>
        <div>
          <div className="carrousel_image"
                  style={{
                    background:`url(${slide_two})`,
                    height:`${window.innerHeight}px`,
                  }}           
            ></div>
        </div>
        <div>
        <div className="carrousel_image"
                style={{
                  background:`url(${slide_three})`,
                  height:`${window.innerHeight}px`,
                }}           
           > </div>
        

        <div className="carrousel_image"
                style={{
                  background:`url(${slide_four})`,
                  height:`${window.innerHeight}px`,
                }}           
           > </div>

<div className="carrousel_image"
                style={{
                  background:`url(${slide_five})`,
                  height:`${window.innerHeight}px`,
                }}           
           > </div>
          <div className="carrousel_image"
                style={{
                  background:`url(${slide_six})`,
                  height:`${window.innerHeight}px`,
                }}           
           > </div>
        </div>
    </Slider>        
         
    </div>
  )
}

export default Carrousel

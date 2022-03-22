import React from 'react'
import { Carousel } from 'react-bootstrap'
import sl from './Slider.module.scss'
import aaa from '../../../image/slaid/aaa.jpg'
import bbb from '../../../image/slaid/bbb.jpg'
import ddd from '../../../image/slaid/dd.jpg'
const Slider = () => {
  return (


<div>
    
<Carousel variant="dark">

  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={bbb}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={aaa}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={ddd}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
  </Carousel> 

</div>

  )
}

export default Slider

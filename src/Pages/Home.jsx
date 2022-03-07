import React from 'react'
import Menu from '../components/Menu/Menu'
import Slider from '../components/UI/Slider/Slider'
import Bloks from '../components/Bloks/Bloks'
import Stoks from '../components/Stock/Stock'
import Contact from '../components/Contact/Contact'
import And from '../components/And/And'



const Home = () => {
  return (
    <div>
      <Menu />
      <Slider />
      <Bloks />
      <Stoks />
      <Contact />
      <And />
      
    </div>
  )
}

export default Home
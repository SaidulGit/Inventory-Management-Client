import React from 'react'
import Carusel from '../../Components/Carusel/Carusel'
import SellOff from '../../Components/SellOff/SellOff'
import Favourite from '../../Components/Shop/favourite'


const Home = () => {
  return (
    <div>
     <Carusel></Carusel>
     <SellOff></SellOff>
     <Favourite></Favourite>
    </div>
  )
}

export default Home
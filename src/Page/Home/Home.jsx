import React from 'react'
import Carusel from '../../Components/Carusel/Carusel'
import SellOff from '../../Components/SellOff/SellOff'
import Favourite from '../../Components/Shop/favourite'
import Shopid from '../../Components/ShopDetails/Shopid'


const Home = () => {
  return (
    <div>
     <Carusel></Carusel>
     <Shopid></Shopid>
     <SellOff></SellOff>
     <Favourite></Favourite>
    </div>
  )
}

export default Home
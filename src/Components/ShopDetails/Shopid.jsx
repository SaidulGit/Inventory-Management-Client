import React from 'react'
import Usetansdata from '../useTans/UsetansData';
import Card from './Card';

const Shopid = () => {
    const [userData, refetch] = Usetansdata();




  return (
    <div className='mt-10 mb-5'>
        <div>
            <h2 className='text-6xl font-bold text-center'>Shop</h2>
        </div>
     
    <div className='flex gap-5'>
    {
        userData.map(cart => <Card key={cart._id} cart={cart}></Card>)
    }
    </div>

    </div>
  )
}

export default Shopid
import React from 'react'

const Card = ({cart}) => {
    console.log(cart)
  return (
    <div>
        <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
  <figure><img src={cart.ShopLogo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {cart.ShopName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{cart.ShopInformation}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{cart.OwnerName}</div> 
      <div className="badge badge-outline">{cart.ShopLocation}</div>
    </div>
    <button className='btn btn-accent mt-2'>Watch more</button>
  </div>
</div>
    </div>
  )
}

export default Card
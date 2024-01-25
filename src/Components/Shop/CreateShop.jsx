import React, { useContext } from 'react'
import { Context } from '../../Page/AuthProvider/AuthContext'
import Swal from 'sweetalert2'

import UseAxiosPublic from '../UseAxiosjs/UseAxiosPublic'

const CreateShop = () => {
  const {user} = useContext(Context)
  const axiosPublic = UseAxiosPublic();
  
const handleShop = (e) => {
   e.preventDefault()
   const form = e.target;
   const shopName = form.name.value;
   const shopLogo = form.photo.value;
   const shopInformation = form.information.value;
   const shopLocation = form.location.value;
   const ownerName = form.OwnerName.value;
   const ownerEmail = form.OwnerEmail.value;
   const data = {shopName,shopLogo,shopInformation,shopLocation,ownerName,ownerEmail}
   console.log(data)

   axiosPublic.put(`/shop/${user.email}`,data)
   .then(res => {
    if(res.data){
      e.target.reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Shop Carated",
        showConfirmButton: false,
        timer: 1500
      })
    }
   })
}


  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-32 flex-col lg:flex-row">
        <div className="lg: -mt-20">
          <h1 className="text-5xl text-center font-bold lg:-mt-30">Create Shop!</h1>
          <div className="card shrink-0 w-[600px] mt-10 shadow-2xl bg-base-100">
            <form onSubmit={handleShop} className="card-body">
             <div className='flex gap-2 justify-around'>
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Shop name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop logo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Shop logo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Information</span>
                </label>
                <input
                  type="text"
                  name="information"
                  placeholder="Shop Information"
                  className="input input-bordered"
                  required
                />
              </div>
             </div>
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Shop location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Email</span>
                </label>
                <input
                defaultValue={user.email}
                  type="text"
                  name="OwnerEmail"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Name</span>
                </label>
                <input
                defaultValue={user.displayName}
                  type="text"
                  name="OwnerName"
                  className="input input-bordered"
                  
                />
              </div>
             </div>
             </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success btn-outline"
                  type="submit"
                  value="Create Shop"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateShop
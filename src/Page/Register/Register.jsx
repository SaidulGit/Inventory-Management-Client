import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Regis from "../../assets/Register/regist.png";
import { Context } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import UseAxiosPublic from "../../Components/UseAxiosjs/UseAxiosPublic";

const Register = () => {
    const navigate = useNavigate()
    const { createUser,googleSignin,updateUserProfile}= useContext(Context)
  const axiosPublic = UseAxiosPublic()

    const handleGoogle = () => {
      googleSignin()
      .then(res => {
        if(res.user){
          const email = res.user.email
          const name = res.user.displayName
         const user= {email,name}
          axiosPublic.post("/user",user)
          .then(res => console.log(res.data))
        }
      })
      .catch(error => console.error(error))

      navigate("/")
    }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const infoUser = { email, password, name, photo };
    console.log(infoUser);
    const data = {name,email}
    
    createUser(email,password)
    .then(res=>{
      if(res.user){
        axiosPublic.post("/user",data)
   .then(res => console.log(res.data))
      }
    })
    
    updateUserProfile(name,photo)
    .then(res =>{
      console.log("Profile Updated",  res.user)
    })
    .catch(error=> console.log(error))
    e.target.reset();
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Registation Success",
      showConfirmButton: false,
      timer: 1500
    })
    
    navigate("/")
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-32 flex-col lg:flex-row">
        <div>
          <img className="w-full" src={Regis} alt="" />
        </div>
        <div className="lg: -mt-20">
          <h1 className="text-5xl text-center font-bold lg:-mt-30">Sign UP!</h1>
          <div className="card shrink-0 w-[600px] mt-10 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success btn-outline"
                  type="submit"
                  value="Sign UP"
                />
              </div>
              <div className="flex flex-col w-full">
              <div className="divider divider-accent">OR</div>
              <div className="text-center"><button onClick={handleGoogle} className="btn btn-outline"> <p className="text-xl"><FcGoogle /></p> Sign in with Google</button></div>
              </div>
            </form>
            <p className="mb-2 text-base font-normal text-center">
              Allready have an account.  <Link className="text-orange-400 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

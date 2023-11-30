import React from "react";
import logo from "../../assets/login/login-pic.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const info = { email, password };
    console.log(info);
    e.target.reset();
    navigate("/")
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-32 flex-col lg:flex-row-reverse">
        <div>
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="lg: -mt-20">
          <h1 className="text-5xl text-center font-bold lg:-mt-30">Login now!</h1>
          <div className="card shrink-0 w-[350px] mt-10 shadow-2xl bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
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
                  className="btn btn-secondary btn-outline"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className='mb-2 text-base font-normal text-center'>Don't have an account. <Link className='text-orange-400 font-bold' to='/signUP'>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

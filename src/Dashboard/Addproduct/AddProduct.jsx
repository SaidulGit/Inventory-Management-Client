import React from "react";

const AddProduct = () => {




    
  return (
    <div className="w-screen">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content gap-32 flex-col lg:flex-row">
          <div>
            <img className="w-full" alt="" />
          </div>
          <div className="lg: -mt-20">
            <h1 className="text-5xl text-center font-bold lg:-mt-30">
              Add Product!
            </h1>
            <div className="card shrink-0 mt-10 w-[600px] shadow-2xl bg-base-100">
              <form className="card-body ">
                <div className="flex gap-5 justify-between">
                  <div>
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
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        placeholder="quantity"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Location</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="location"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Production cost</span>
                      </label>
                      <input
                        type="text"
                        name="cost"
                        placeholder="Production cost"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Profit</span>
                      </label>
                      <input
                        type="text"
                        name="profit"
                        placeholder="Profit"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Discount</span>
                      </label>
                      <input
                        type="text"
                        name="discount"
                        placeholder="discount"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Description</span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-success btn-outline"
                    type="submit"
                    value="Add Product"
                  />
                </div>
                <div className="flex flex-col w-full"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

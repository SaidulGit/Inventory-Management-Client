import React from "react";
import Usetansdata from "../Components/useTans/UsetansData";
import { MdDeleteForever } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import UseAxiosSecure from "../Components/UseAxiosjs/UseAxiosSecure";
import Swal from "sweetalert2";

const UserList = () => {
  const [userData, refetch] = Usetansdata();
  console.log(userData);
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (id) => {
    axiosSecure.delete(`/delete/${id}`).then((res) => {
        refetch()
      if (res.data) {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    });
  };

  const handleAdmin =(id) =>{
    axiosSecure.patch(`/makeadmin/${id}`)
    .then(res => {
        if (res.data) {
            Swal.fire({
              position: "top-start",
              icon: "success",
              title: `Admin Make`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
          refetch()
    })

    
  }

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-6xl font-bold text-center">
          Total user : {userData.length}
        </h2>
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto w-[1300px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Option</th>
              </tr>
            </thead>
            {userData.map((cart, index) => (
              <tbody key={cart._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{cart.OwnerName}</td>
                  <td>{cart.OwnerEmail}</td>
                  <td>
                    {cart.Role === "admin" ? (
                      "admin"
                    ) : (
                      <button onClick={() =>handleAdmin(cart._id)}>
                        <FaUser className="text-4xl bg-orange-500" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(cart._id)}>
                      <MdDeleteForever className="text-3xl text-red-400 bg-yellow-400" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;

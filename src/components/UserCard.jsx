import React, { useState } from "react";
import UpdateUser from "../pages/UpdateUser";
import axios from "axios";

export default function UserCard({ user, setUserAdded, userAdded }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleDelete = async (id) => {
    try {
      const isDeleted = await axios.delete(
        `http://localhost:5000/api/delete-user-to-mongo/${id}`
      );
      if (isDeleted.status == 200) {
        alert("uer deleted successfully");
        setUserAdded(!userAdded);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h5>User Name :{user.name} </h5>
      <h5>User email :{user.email} </h5>
      <h5>User role :{user.role} </h5>
      <h5>User salary : {user.salary}</h5>
      <h5>User address :{user.address} </h5>

      <button onClick={() => setIsFormOpen(!isFormOpen)}>Edit User</button>
      <button onClick={() => handleDelete(user._id)}>Delete</button>

      {isFormOpen && (
        <UpdateUser
          oldUser={user}
          setUserAdded={setUserAdded}
          userAdded={userAdded}
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </div>
  );
}

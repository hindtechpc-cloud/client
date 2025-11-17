import React, { useState } from "react";
import UpdateUser from "../pages/UpdateUser";

export default function UserCard({ user, setUserAdded, userAdded }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <h5>User Name :{user.name} </h5>
      <h5>User email :{user.email} </h5>
      <h5>User role :{user.role} </h5>
      <h5>User salary : {user.salary}</h5>
      <h5>User address :{user.address} </h5>

      <button onClick={() => setIsFormOpen(!isFormOpen)}>Edit User</button>

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

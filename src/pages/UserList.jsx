import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

export default function UserList({ userAdded, setUserAdded }) {
  const [users, setUsers] = useState();

  const loadUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get-mongo-date");
      console.log(res);
      setUsers(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUsers();
  }, [userAdded]);
  return (
    <div>
      <ul>
        {users?.length > 0 &&
          users?.map((user) => {
            return (
              <li
                key={user.id}
                style={{
                  border: "1px solid red",
                }}
              >
                <UserCard
                  user={user}
                  userAdded={userAdded}
                  setUserAdded={setUserAdded}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

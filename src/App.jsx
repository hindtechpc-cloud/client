import axios from "axios";
import AddUser from "./pages/AddUser";
import React, { useEffect, useState } from "react";
import UserList from "./pages/UserList";
import UserCard from "./components/UserCard";
import Form from "./pages/Form";
import Employee from "./pages/Employee";

export default function App() {
  const [user, setUser] = useState({});
  const [userAdded, setUserAdded] = useState(false);
  const loadUserData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user");
      // console.log(res.data.user);
      if (res.status == 200) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   loadUserData();
  // }, []);

  return (
    <div>
      {/* <UserCard user={user} /> */}
<Form/>
<Employee/>
      {/* <AddUser setUserAdded={setUserAdded} userAdded={userAdded} />
      <UserList userAdded={userAdded} setUserAdded={setUserAdded}/> */}
    </div>
  );

  // return (
  //   <>

  //   </>
  // );
}

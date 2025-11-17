import axios from "axios";
import React, { useState } from "react";

export default function UpdateUser({ userAdded, setUserAdded,oldUser,setIsFormOpen,isFormOpen }) {
  const [user, setUser] = useState(oldUser);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(() => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${oldUser.id}/update-user`,
        user
      );
      console.log(res);
      if (res.status == 200) {
        setLoading(false);
        //  alert(res.data.message);
        setUserAdded(!userAdded);
        setIsFormOpen(!isFormOpen);
        setUser({
          name: "",
          email: "",
          address: "",
          role: "",
          salary: "",
          image: "",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
        <h1>Edit user details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter your name..."
          value={user?.name}
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Enter your email..."
          value={user?.email}
        />
        <input
          type="text"
          onChange={handleChange}
          name="salary"
          placeholder="Enter your salary..."
          value={user?.salary}
        />
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="Enter your address..."
          value={user?.address}
        />
        <input
          type="text"
          onChange={handleChange}
          name="role"
          placeholder="Enter your role..."
          value={user?.role}
        />
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Enter your image..."
          value={user?.image}
        />
        <button>{loading ? "submiting..." : "Submit"}</button>
      </form>
    </div>
  );
}

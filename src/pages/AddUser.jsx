import axios from "axios";
import React, { useState } from "react";

export default function AddUser({ userAdded, setUserAdded }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    role: "",
    salary: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;

    setUser(() => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/add-user-to-mongo",
        user
      );
      console.log(res);
      if (res.status == 201) {
        setLoading(false);
        //  alert(res.data.message);
        setUserAdded(!userAdded);
        setUser({
          name: "",
          email: "",
          address: "",
          role: "",
          salary: "",
          image: "",
        });
      }
      if (res.status == 422) {
        setErrors(res.data);
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.response.data);
      setErrors(() => {
        return {
          ...errors,
          errors: error.response.data.forEach((err) => {
            return (errors[err.path] = err.msg);
          }),
        };
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter your name..."
          value={user.name}
        />
        {errors.name && (
          <p
            className="text-red-500"
            style={{
              color: "red",
            }}
          >
            {errors.name}
          </p>
        )}
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Enter your email..."
          value={user.email}
        />
        {errors.email && (
          <p
            className="text-red-500"
            style={{
              color: "red",
            }}
          >
            {errors.email}
          </p>
        )}
        <input
          type="text"
          onChange={handleChange}
          name="salary"
          placeholder="Enter your salary..."
          value={user.salary}
        />
        {errors.salary && (
          <p
            className="text-red-500"
            style={{
              color: "red",
            }}
          >
            {errors.salary}
          </p>
        )}
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="Enter your address..."
          value={user.address}
        />
        {errors.address && (
          <p
            className="text-red-500"
            style={{
              color: "red",
            }}
          >
            {errors.address}
          </p>
        )}
        <input
          type="text"
          onChange={handleChange}
          name="role"
          placeholder="Enter your role..."
          value={user.role}
        />
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Enter your image..."
          value={user.image}
        />
        {errors.image && (
          <p
            className="text-red-500"
            style={{
              color: "red",
            }}
          >
            {errors.image}
          </p>
        )}
        {errors?.length > 0 && (
          <p className="text-red-500">Error to submiting form</p>
        )}
        <button>{loading ? "submiting..." : "Submit"}</button>
      </form>
    </div>
  );
}

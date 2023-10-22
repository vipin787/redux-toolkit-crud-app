import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: [e.target.value] });
    console.log("data", users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users =>", users);
    dispatch(createUser(users));
  };

  return (
    <div>
      <h2 className="my-2">Fill the form</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control "
            name="age"
            id="exampleInputPassword1"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

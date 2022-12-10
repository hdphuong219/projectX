import React, { useState } from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../actions/UserAction";

function Login(props) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (password === confirmPassword) {
      dispatch(SignupUser(data));
    } else {
      alert("wrong repeat password");
    }
  };

  return (
    <div className="signup-page">
      <h2>ĐĂNG KÍ</h2>
      <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
        <input {...register("name")} placeholder="Name" required></input>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
        ></input>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <input
          {...register("repeat password")}
          placeholder=" Repeat password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>

        <input type="submit" value="Đăng Kí"></input>
      </form>
    </div>
  );
}

export default Login;

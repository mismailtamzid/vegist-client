import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {
  const { register, handleSubmit } = useForm();
  const { allFirebase } = useAuth();
  const { user, setUser, googleLogin, manualyRegister } = allFirebase;

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const onSubmit = (data) => {
    manualyRegister(data.email, data.password,data.name, history, redirect_uri);
  };
  const loginWithGoogle = () => {
    googleLogin(history, redirect_uri);
  };
  return (
    <div>
     
      <div>
        <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="type your name" /> <br />
          <input {...register("email")} placeholder="type email" /> <br />
          <input {...register("password")} placeholder="type password" /> <br />
          <input type="submit" />
        </form>
        Already Register? please<Link to="/login">Login</Link> <br />
        <button onClick={loginWithGoogle}>Google Login</button>
      </div>
      
    </div>
  );
};

export default Register;

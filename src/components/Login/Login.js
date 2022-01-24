import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   const { register, handleSubmit } = useForm();

 
  const { allFirebase } = useAuth();
  const { user, setUser, googleLogin, manualyLogin } = allFirebase;

  const history = useHistory()
  const location = useLocation()
  const redirect_uri = location.state?.from ||"/"
  const onSubmit = (data) => {
    manualyLogin(data?.email, data?.password, history, redirect_uri)
  };
  const loginWithGoogle = ()=>{
    googleLogin(history, redirect_uri);
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} /> <br />
        <input type="password" {...register("password")} /> <br />
        <input type="submit" /> <br />
      </form>
      Not Registered? please<Link to="/register">Register</Link> first <br />
      <button onClick={loginWithGoogle}>Google Login</button>
     
    </div>
  );
};

export default Login;
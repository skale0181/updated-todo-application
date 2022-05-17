import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../Redux/Login/action";
import styled from "styled-components";
import Button from '@mui/material/Button';

const LoginBox = styled.div`
  width: 350px;
  height: 300px%;
  // border:2px solid green;
  margin: auto;
  margin-top: 10%;
  // background-color: rgb(235, 216, 195);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 10px;
`;

const Inputbox = styled.input`
border-radius: 5px;
`

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated,loading,error,token} = useSelector((state) => state.login);
  const all = useSelector(store=>store.login)
  // console.log(all)

  const handlelogin = () => {
    const userDetails = {
      email,
      password,
    };
    dispatch(login(userDetails));
    
  };
  if (isAuthenticated) {
    navigate("/");
  }



  const disabled = email.length === 0 || password.length === 0 

  return (
    <LoginBox>
      <div className="App">
        <h1>Login</h1>

        {/* <label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> */}
      
        <label>
          <Inputbox
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          <Inputbox
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <Button style={{backgroundColor:"rgb(253,93,93)"}} disabled={disabled} onClick={()=>handlelogin()}>
        {loading?"Loging In ....":"Login"}
        </Button>
        <hr />
        {error && <div style={{color:'rgb(253,93,93)'}}>somthing went wrong</div> }
        <p>
          Don't have an account? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </LoginBox>
  );
};

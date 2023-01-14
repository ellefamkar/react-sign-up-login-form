import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { validation } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const InputContainer = styled.div`
   position: relative;
   transition: all 0.2s ease-in;

   label {
      z-index: -1;
   }

   .hasError {
      border:3px solid red;
      outline:3px solid red;
   }

   input:-internal-autofill-selected {
      background-color: #ffffff !important;
   }

   .inputClass {
      z-index: 2;

      &[type="checkbox"]{
         padding: 10px;
         margin-left:1rem;
         margin-top:5px;
         border: none;
         border-radius: 4px;
         font:inherit;
         color:#ffffff;
         background-color: transparent;
         outline: none;
       }

      &:not([type="checkbox"]){
         padding: 10px;
         margin-bottom: 1.4rem;
         width: 100%;
         border: none;
         border-radius: 4px;
         font:inherit;
         color:#ffffff;
         background-color: transparent;
         outline: 2px solid #ffffff;
       }

       &:not([type="checkbox"]) option{
         color:#000000;
       }
   }

   .labelClass {
      position: absolute;
      top:0;
      left:0;
      transform: translate(10px,10px);
      transform-origin: left;
      transition: transform .25s;
    }

   &:focus-within {
      margin-top: 2rem;
   }
   select:focus-within {
      margin-top: 0px !important;
   }
   &:focus-within label {
      transform: translate(0, -30px) scale(0.8);
      color: #d1c5fc;
   }
   // &:focus-within .inputClass {
   //    outline-color: 2px solid #eaeaea;
   // }

   
`;

const Login = () => {

   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      select: "",
      isAccepted: false
   });

   const [errors, setErrors] = useState({});
   const [touched, setTouched] = useState({});

   useEffect(()=>{
      setErrors(validation(data));
   }, [data, touched]);

   const handleTouch = (event)=>{
      setTouched({
         ...touched,
         [event.target.name]: true,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if(!Object.keys(errors).length){
         notify("Successful","success");
      }else{
         notify("Invalid", "error");
         setTouched({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            select: true,
            isAccepted: true,
         });
      }
   };

   const handleChange = (event)=>{
      console.log(event.target.value);
      if(event.target.name === "isAccepted"){
         setData({
            ...data,
            [event.target.name]: event.target.checked
         });
      }else{
         setData({
            ...data,
            [event.target.name]: event.target.value
         });
         if (event.target.value) {
               event.target.style.background = "#ffffff";
               event.target.style.color = "#000000";
            } else {
               event.target.style.background = "transparent";
               event.target.style.color = "transparent";
            }
      }
   };

   return (
      <>
        <form onSubmit={handleSubmit}>
               <InputContainer>
                  <label className="labelClass">Email Address</label>
                  <input type="text" name="email" value={data.email} className="inputClass" onChange={handleChange} onFocus={handleTouch}  />
                  {errors.email && touched.email && <span className="errors">{errors.email}</span>}
               </InputContainer>
               <InputContainer>
                  <label className="labelClass">Password</label>
                  <input type="password" name="password" value={data.password} className="inputClass" onChange={handleChange} onFocus={handleTouch}  />
                  {errors.password && touched.password && <span className="errors">{errors.password}</span>}
               </InputContainer>
               <div className="buttonContainer">
                  <button type="submit" className="Login">
                     Log In
                  </button>
               </div>
        </form>
         <ToastContainer />
      </>
   );
};

export default Login;

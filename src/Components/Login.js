import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { validation } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div`
  min-height: calc(100vh - 2rem);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  &::before {
    position: absolute;
    content: "";
    right: 10%;
    top: 25%;
    width: 450px;
    height: 450px;
    /* background: #17141d; */
    background: #ff380b;
      background-image: linear-gradient(45deg, #3023AE 0%, #ff380b 100%);
    border-radius: 32% 67% 52% 65% / 25% 45% 80% 56%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 6s linear infinite;
    display: block;
    z-index: 1;
    -webkit-animation: sliderShape 6s linear infinite;
  }

  &::after {
    position: absolute;
    content: "";
    left: 20%;
    top: 10%;
    width: 350px;
    height: 350px;
    /* background: #17141d; */
    background: #ff380b;
    background-image: linear-gradient(45deg, #3023AE 0%, #ff380b 100%);
    border-radius: 62% 37% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 4s linear infinite;
    display: block;
    z-index: 1;
    -webkit-animation: sliderShape 4s linear infinite;
  }

  @keyframes sliderShape{
    0%,100%{
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    34%{
        border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform:  translate3d(0,5px,0) rotateZ(0.01deg);
    }
    50%{
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    67%{
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
      transform: translate3d(0,-3px,0) rotateZ(0.01deg);
    }
  }

  @media (max-width: 768px){
      &::after {
      display: none; 
      }
   }

}
`;

const FormContainer = styled.div`
   background-color: rgba(0, 0, 34, 0.241);
   border-radius: 10px;
   width: 400px;
   height: auto;
   min-height: 350px;
   padding: 2.5rem 2rem 1.5rem 2rem;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(4.9px);
   -webkit-backdrop-filter: blur(4.9px);
   border: 1px solid rgba(255, 255, 255, 0.1);
   z-index: 2;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   form{
    width:100%;
   }

   h2 {
      color: #ffffff;
   }

   p {
      position: relative;
      font-family: sans-serif;
      text-transform: uppercase;
      font-size: 1.6em;
      letter-spacing: 4px;
      overflow: hidden;
      background: linear-gradient(103deg, #00128f, #fff, #000528);
      background-repeat: no-repeat;
      background-size: 80%;
      animation: animate 5s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(225, 225, 225, 0.5);
      margin: 1rem auto 1.5rem;
   }

   input[type="checkbox"]{
      padding: 10px;
      margin-left: 0.7rem;
      margin-top:5px;
      border: none;
      border-radius: 4px;
      font:inherit;
      color:#ffffff;
      background-color: transparent;
      outline: none;
      accent-color: #ff380b;
    }

   select {
      padding: 10px;
      margin-bottom: 12px;
      width: 100%;
      border: none;
      border-radius: 4px;
      font:inherit;
      color:#ffffff;
      background-color: transparent;
      outline: 2px solid #ffffff;
    }

    select option{
      color:#000000;
    }

   .relativeContainer{
      position: relative;
   }

   .errors{
      margin-top: -8px;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 4px;
      font-size: 12px;
      display: block;
      position: absolute;
      bottom: 0;
      color: #ff0000;
      background-color: #fffffff2;
      right: 6%;
   }
   
   .checkBoxErrors{
      margin-bottom: 5px;
      margin-top: 4px;
      font-size: 12px;
      display: inline-block;
      color: #ff0000;
      background-color: #fffffff2;
      padding: 4px 10px;
      border-radius: 3px;
   
   }

   .hasError {
      border:3px solid red;
      outline:3px solid red;
   }

   .buttonContainer{

     button {
        cursor: pointer;
        width: 36%;
        padding: 0.6rem;
        border-radius: 4px;
        border: none;
        color: white;
        font-size: 15px;
        background-color: #c4323a;
        margin-top: 1rem;
     }
   }

   @keyframes errorAnimation {
      0% {
         background-position: -500%;
      }
      100% {
         background-position: 500%;
      }
   }
 
   @keyframes animate {
      0% {
         background-position: -500%;
      }
      100% {
         background-position: 500%;
      }
   }

   @media (max-width: 768px){
      max-width: 90%;
      margin: 0 auto;
      height: auto;

      form {
         .buttonContainer {
            width: 100%;
         }
         button {
            width: 48%;
         }
      }
      
   }
`;

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

const SignUpButton = styled.div`
   position: absolute;
   font-size: 1rem;
   cursor: pointer;
   right:  -5px;
   top: 10%;
   width: 76px;
   height: 58px;
   padding: 0.5rem;
   background: #ff009914;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-image: linear-gradient(86deg,#3023ae8a 0%,#ffffff6b 100%);
   border-radius: 32% 67% 52% 65% / 25% 45% 80% 56%;
   will-change: border-radius,transform,opacity;
   -webkit-animation: sliderShape 4s linear infinite;
   animation: sliderShape 4s linear infinite;
   -webkit-animation: sliderShape 4s linear infinite;
   z-index: 1;

   &::before{
      content: "";
    color: white;
    width: 76px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 46px;
    position: absolute;
    top: 0px;
    right: 5px;
    z-index: -1;
    background: rgba(255,255,255,0.1);
    border-radius: 0px;
    border-top-left-radius: 3px;
    box-shadow: 0 4px 30px rgba(0,0,0,0.1);
    border-bottom-left-radius: 5px;
  }

  &::after {
   content: "";
   color: white;
   width: 74px;
   top: 6px;
   right: 0px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   height: 46px;
   position: absolute;
   z-index: -1;
   background: rgba(255,255,255,0.2);
   border-radius: 0px;
   border-top-left-radius: 3px;
   box-shadow: 0 4px 30px rgba(0,0,0,0.38);
   border-bottom-left-radius: 5px;
   }

   span {
      position: absolute;
      top: 1px;
      bottom: 0px;
      right: 0;
      width: 5px;
      height: 89%;
      border-top-right-radius: 23px;
      border-bottom-right-radius: 14px;
      background: #ffffff61;
   }

   a{
    color:white;
    text-decoration: none;
 }
`;

const Login = () => {

   const [data, setData] = useState({
      email: "",
      password: ""
   });

   const [errors, setErrors] = useState({});
   const [touched, setTouched] = useState({});

   useEffect(()=>{
      setErrors(validation(data, "login"));
      document.title = "Login";
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
         notify("Successful Login!","success");
      }else{
         notify("Invalid Username or Password!", "error");
         setTouched({
            email: true,
            password: true
         });
      }
   };

   const handleChange = (event)=>{
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
   };

   return (
    <Container>
      <FormContainer>
        <p>Log In </p>
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
                     Login
                  </button>
               </div>
        </form>
         <SignUpButton>
            <Link to="/signup">Sign Up</Link>
            <span></span>
        </SignUpButton>
      </FormContainer>
      <ToastContainer />
    </Container>
   );
};

export default Login;

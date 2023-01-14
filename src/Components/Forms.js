import React from 'react';
import styled from "styled-components";
import SignUp from "./SignUp";
import Login from "./Login";

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
    background: #f09;
      background-image: linear-gradient(45deg, #3023AE 0%, #f09 100%);
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
    background: #f09;
    background-image: linear-gradient(45deg, #3023AE 0%, #f09 100%);
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
   height: 500px;
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

   form {
      width: 100%;

      .buttonContainer{
        width:100%;
        margin:1rem auto 0.2rem auto;
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
      }

      button,
      a {
         cursor: pointer;
         padding: 0.5rem 1.5rem;
         border-radius: 5px;
         border: none;
         margin-top:1rem;
       
         &.signup {
            background-color: #f09;
            color: #ffffff;
         }
      }
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
      accent-color: #f09;
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


const LoginButton = styled.div`
   position: absolute;
   font-size: 1rem;
   cursor: pointer;
   right:  -5px;
   top: 10%;
   width: 58px;
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
    width: 57px;
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
   width: 54px;
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
`

const Forms = () => {
    return (
        <Container>
            <FormContainer>
            <p>Sign Up </p>
            <SignUp />
            {/* <Login /> */}
            <LoginButton>
                Login
                <span></span>
            </LoginButton>
            </FormContainer>
        </Container>
    );
};

export default Forms;
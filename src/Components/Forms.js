import React from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
// import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min'; for v5
import { Route, Routes , Navigate } from 'react-router-dom';

const Forms = () => {
    return (
        // <Switch>  for v5
        //     <Route path="/SignUp" component={SignUp} />
        //     <Route path="/Login" component={Login} />
        //     <Redirect from="/" to="/Signup" />
        // </Switch>
        <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Navigate to="/SignUp" />} />
        </Routes>
    );
};

export default Forms;
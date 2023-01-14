import React from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Forms = () => {
    return (
        <Switch>
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
            <Redirect from="/" to="/Signup" />
        </Switch>
    );
};

export default Forms;
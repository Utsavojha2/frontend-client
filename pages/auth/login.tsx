import React from 'react';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import Login from 'containers/Authentication/Login/Login';

const SignIn = () => (
  <AuthLayout>
    <Login />
  </AuthLayout>
);

SignIn.isGuestPage = true;

export default SignIn;

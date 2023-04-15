import React from 'react';
import './auth.styl';
import LoginForm from './login-form/login-form';

export const Auth = () => {
  return (
    <div className="w-100 p-5 text-white input-box h-100 d-flex justify-content-center align-items-center">
      <LoginForm />
    </div>
  );
};

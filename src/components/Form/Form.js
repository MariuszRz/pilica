import React from 'react';
import { Component } from './form.css';
const Form = ({ children, ...props }) => {
  return <Component {...props}>{children}</Component>;
};

export default Form;

import React from 'react';
import { Component } from './alert.css';
const Alert = ({ children, ...props }) => {
  return <Component {...props}>{children} </Component>;
};

export default Alert;

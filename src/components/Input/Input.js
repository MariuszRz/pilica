import React from 'react';
import { Component } from './input.css';
const Input = (props) => {
  return <Component {...props}>{props.children}</Component>;
};

export default Input;

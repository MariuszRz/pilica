import React from 'react';
import { Component } from './label.css';

const Label = (props) => {
  return <Component {...props}>{props.children}</Component>;
};

export default Label;

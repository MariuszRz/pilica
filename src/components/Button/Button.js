import React from 'react';
import { Container } from './Button.css';

const Button = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default Button;

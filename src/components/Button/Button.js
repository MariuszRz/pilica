import React from 'react';
import { Container } from './button.css';

const Button = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default Button;

import React from 'react';
import { Container, Loader } from './button.css';

const Button = ({ ico, children, ...props }) => {
  const Ico = () => {
    switch (ico) {
      case 'load':
        return <Loader />;

      default:
        return null;
    }
  };
  return (
    <Container {...props}>
      <Ico />
      {children}
    </Container>
  );
};

export default Button;

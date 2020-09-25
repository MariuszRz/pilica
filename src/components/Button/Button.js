import React from 'react';
import { Container, Loader, Save } from './button.css';
import PropTypes from 'prop-types';

const Button = ({ ico, children, ...props }) => {
  const Ico = () => {
    switch (ico) {
      case 'load':
        return <Loader />;
      case 'save':
        return <Save />;

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

Button.prototype = {
  ico: PropTypes.oneOf(['loader', 'save']),
};

export default Button;

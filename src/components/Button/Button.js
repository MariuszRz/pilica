import React from 'react';
import { Container, Loader, Save, SaveLoad } from './button.css';
import PropTypes from 'prop-types';

const Button = ({ ico, children, ...props }) => {
  const Ico = () => {
    switch (ico) {
      case 'load':
        return <Loader />;
      case 'save':
        return <Save />;
      case 'save-load':
        return <SaveLoad />;

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
  ico: PropTypes.oneOf(['loader', 'save', 'save-load']),
};

export default Button;

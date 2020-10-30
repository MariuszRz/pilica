import React from 'react';
import { Component, Item } from './select.css';

const Select = ({ items, ...props }) => {
  if (items == null) return null;
  return (
    <Component {...props}>
      {items.map((item) => (
        <Item key={item.id} value={item.id}>
          {item.name}
        </Item>
      ))}
    </Component>
  );
};

export default Select;

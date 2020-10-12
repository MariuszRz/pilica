import { Button } from 'components';
import React from 'react';
import {
  Component,
  Article,
  Title,
  Content,
  Picture,
  Action,
} from './itemList.css';

const ItemList = ({ item, ...props }) => {
  const { id, title, date, img } = DataTransferItem;
  return (
    <Component>
      <Picture src={img} alt="img"></Picture>
      <Content>
        <Title>{title}Title</Title>
        <Article>
          Dolore ullamco minim ullamco veniam consectetur voluptate do duis
          proident aliqua et anim. Non tempor excepteur culpa sint incididunt
          laboris occaecat dolore duis. Do qui elit officia esse velit tempor do
          sint mollit excepteur eiusmod. Sunt excepteur exercitation Lorem
          reprehenderit cillum consectetur qui officia. Ut cillum fugiat ex nisi
          tempor incididunt minim eiusmod dolore qui id.
        </Article>
        <Action>
          <Button ico="edit">Edytuj</Button>
        </Action>
      </Content>
    </Component>
  );
};

export default ItemList;

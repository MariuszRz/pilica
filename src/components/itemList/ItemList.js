import { Button } from 'components';
import React from 'react';
import nl2br from 'utils/nl2br';
import {
  Component,
  Article,
  Title,
  Content,
  Picture,
  Action,
} from './itemList.css';
import { NavLink } from 'react-router-dom';

const ItemList = ({ item, ...props }) => {
  const { id, title, article, date, reference, img } = item;
  return (
    <Component>
      <Picture src={img} alt="img"></Picture>
      <Content>
        <Title>
          {title} <span>{date}</span>
        </Title>
        <Article dangerouslySetInnerHTML={{ __html: nl2br(article) }}></Article>
        <Action>
          <NavLink to={`/panel/edit/${reference}`}>Edytuj</NavLink>
        </Action>
      </Content>
    </Component>
  );
};

export default ItemList;

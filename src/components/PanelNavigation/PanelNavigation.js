import React from 'react';
import { Component, Link } from './panelNavigation.css';
import {
  GrDocumentText,
  GrDocumentVerified,
  GrDocumentTime,
} from 'react-icons/gr';
const PanelNavigation = () => {
  return (
    <Component>
      <Link to={`/panel/new`}>
        <GrDocumentText />
        Nowy
      </Link>
      <Link to={`/panel/article`}>Artykuły</Link>
      <Link to={`/panel/public`}>
        <GrDocumentVerified />
        Opublikowane
      </Link>
      <Link to={`/panel/create`}>
        <GrDocumentTime />W opracowaniu
      </Link>
    </Component>
  );
};

export default PanelNavigation;

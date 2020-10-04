import React from 'react';
import { Component, Link } from './panelNavigation.css';
import {
  GrDocumentText,
  GrDocumentVerified,
  GrDocumentTime,
} from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
const PanelNavigation = () => {
  return (
    <Component>
      <Link to={`/panel/new`}>
        <GrDocumentText />
        Nowy
      </Link>

      <Link to={`/panel/public`}>
        <GrDocumentVerified />
        Opublikowane
      </Link>
      <Link to={`/panel/create`}>
        <GrDocumentTime />W opracowaniu
      </Link>
      <Link to={`/panel/setting`}>
        <FiSettings />
        Ustawienia
      </Link>
    </Component>
  );
};

export default PanelNavigation;

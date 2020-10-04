import { Main } from 'app.css';
import { PanelNavigation } from 'components';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NewArticle } from 'pages';
const Panel = () => {
  return (
    <Switch>
      <Route path={`/`} exact component={NewArticle} />
      <Route path={`/panel/new`} exact component={NewArticle} />
    </Switch>
  );
};

export default Panel;

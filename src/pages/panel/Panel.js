import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Draft, NewArticle, Publish, Edit } from 'pages';

const Panel = () => {
  return (
    <Switch>
      <Route path={`/`} exact component={NewArticle} />
      <Route path={`/panel/new`} component={NewArticle} />
      <Route path={`/panel/public`} component={Publish} />
      <Route path={`/panel/draft`} component={Draft} />
      <Route path={`/panel/edit/:ref`} component={Edit} />
    </Switch>
  );
};

export default Panel;

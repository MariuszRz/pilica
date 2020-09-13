import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'utils/Globalsyle';
import theme from 'utils/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        <section>
          <Switch>
            <Route path={`/`} exact component={HomePage} />
            <Route path={`/aktualnosci`} exact component={HomePage} />
            <Route path={`/historia`} exact component={HomePage} />
            <Route path={`/login`} component={Login} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

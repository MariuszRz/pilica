import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'utils/Globalsyle';
import theme from 'utils/theme';
import { Section } from './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from 'components';
import { HomePage, News, History } from 'pages';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        <Section>
          <Switch>
            <Route path={`/`} exact component={HomePage} />
            <Route path={`/news`} exact component={News} />
            <Route path={`/history`} exact component={History} />
            <Route path={`/login`} component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </Section>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

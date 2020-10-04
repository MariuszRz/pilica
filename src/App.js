import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'utils/Globalsyle';
import theme from 'utils/theme';
import { Section, Aside, Main } from './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, PanelNavigation } from 'components';
import { HomePage, News, History, Login, NewArticle, Panel } from 'pages';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from 'store/login/operation';
function App() {
  const isLogged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        {isLogged && <PanelNavigation />}
        <Section>
          <Aside>
            <nav>
              <h2>Aktualności</h2>
              <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </nav>
            <nav>
              <h2>Historia</h2>
              <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </nav>
          </Aside>
          <Main>
            <Switch>
              <Route path={`/`} exact component={HomePage} />
              <Route path={`/news`} exact component={News} />
              <Route path={`/history`} exact component={History} />
              <Route path={`/login`} component={Login} />
              <Route path={`/new`} component={NewArticle} />
              <Route path={`/panel`} component={Panel} />
              <Route component={HomePage} />
            </Switch>
          </Main>
        </Section>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'utils/Globalsyle';
import theme from 'utils/theme';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'components';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <h1>Clear</h1>
        <Button>Zapisz</Button>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

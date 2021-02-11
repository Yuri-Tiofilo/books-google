import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import theme from './styles/themes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  </ThemeProvider>
);

export default App;

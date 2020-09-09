import React from 'react';
import { Route, Router } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import Home from './containers/home';
import { createBrowserHistory } from 'history';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const history = createBrowserHistory();

const theme = {
  text: "#FFFFFF",
  greenAccent: "#c2ef9c",
  accent: "#181818"
}



const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router history={history} >
          <Route path="/" exact component={Home} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

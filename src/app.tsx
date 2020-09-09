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

const TopBlack = styled.div`
  background: #181818;
  /* background: #252627; */
  position: absolute;
  height: 768px;
  top: -320px;
  transform: rotate(-5deg) translateX(-25%);
  width: 200%;
  z-index: -2;
`

const TopAccent = styled.div`
  /* background: #Fdd75f; */
  background: #181818;
  position: absolute;
  height: 440px;
  top: -430px;
  width: 100%;
  z-index: 1;
  width: 200%;
  transform: rotate(-4deg) translateX(-25%);
`


const BottomGrey = styled.div`
  background: #252627;
  position: absolute;
  height: 740px;
  top: 868px;
  transform: rotate(10deg) translateX(-25%);
  width: 200%;
  z-index: -1;
`

const Accent = styled.div`
  background-color: #284e80;
  position: absolute;
  height: 380px;
  right: 0;
  top: 560px;
  width: 100%;
  z-index: -3;
`
export const history = createBrowserHistory();

const theme = {
  // text: "#FFFFFF",
  // greenAccent: "#c2ef9c",
  // accent: "#F99E4C",
  //accent: "#FF4A4A"
  // accent: "#FF4A5A"
  text: "#FFFFFF",
  greenAccent: "#c2ef9c",
  // accent: "#D99E9C",
  // accent: "#FF4A4A"
  // accent: "#5dC75f",
  // accent: "#Fdd75f",
  // accent: "#284e80",
  accent: "#181818",
  // accent: colors[Math.floor(Math.random() * colors.length)]
};



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

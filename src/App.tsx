import React from 'react';
import ModalProvider from './context/ModalContext';
// import creatGloba
// import GlobalStyle
// import React from "react";
import HomeScreen from "./screen/HomeScreen";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div>
      <ModalProvider>
        <GlobalStyles />
        <HomeScreen />
      </ModalProvider>

    </div>
  );
}

export default App;
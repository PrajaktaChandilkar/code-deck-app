import React from 'react';
import ModalProvider from './context/ModalContext';
import PlaygroundProvider from './context/PlaygroundContext';
// import creatGloba
// import GlobalStyle
// import React from "react";
import HomeScreen from "./screen/HomeScreen";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div>

      <PlaygroundProvider>
        <ModalProvider>
          <GlobalStyles />
          <HomeScreen />
        </ModalProvider>
      </PlaygroundProvider>


    </div>
  );
}

export default App;
import GlobalStyles from "./components/styles/global";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import MainScreen from "./components/MainScreen/MainScreen";
import { Flex } from "./components/styles/Flex";
import React from "react";
import PwaMenu from "./components/PwaMenu/PwaMenu";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Flex>
        {/*<PwaMenu />*/}
        <SideMenu/>
        <MainScreen />
      </Flex>
    </div>
  );
};

export default App;

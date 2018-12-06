import React, { PureComponent } from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./components/Home.js";
import MainPage from "./components/MainPage.js";
import About from "./components/About.js";
import WebViewExample from "./components/WebViewExample.js";
import ModalExample from "./components/ModalExample.js";
import ActivityIndicatorExample from "./components/ActivityIndicatorExample.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="mainPage" component={MainPage} title="Main Page" />
      <Scene key="about" component={About} title="About" />
      <Scene key="webView" component={WebViewExample} title="Web View" />
      <Scene key="modal" component={ModalExample} title="Modal" />
      <Scene
        key="activityIndicator"
        component={ActivityIndicatorExample}
        title="Activity Indicator"
      />
    </Scene>
  </Router>
);

export default Routes;

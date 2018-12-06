import React, { PureComponent } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import PresentationalComponent from "./PresentationalComponent";
import List from "./List.js";
import Inputs from "./Inputs.js";
import ImagesExample from "./ImageExample.js";
import NetImagesExample from "./NetImageExample.js";
import HttpExample from "./HttpExample.js";
import AnimationExample from "./AnimationExample.js";

export default class MainPage extends React.Component {
  state = {
    myState: "This is my message."
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scroll}>
          <HttpExample />
          <AnimationExample />
          <NetImagesExample />
          <ImagesExample />
          <View>
            <PresentationalComponent
              myState={this.state.myState}
              updateState={this.updateState}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.redbox} />
            <View style={styles.bluebox} />
            <View style={styles.blackbox} />
          </View>
          <List />
          <Inputs />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    height: "100%"
  },
  mainContainer: {
    marginTop: 24
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    height: 200
  },
  redbox: {
    width: 300,
    height: 50,
    backgroundColor: "green"
  },
  bluebox: {
    width: 300,
    height: 50,
    backgroundColor: "white"
  },
  blackbox: {
    width: 300,
    height: 50,
    backgroundColor: "red"
  }
});

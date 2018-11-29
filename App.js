import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PresentationalComponent from "./components/PresentationalComponent";
import List from "./components/List.js";
import Inputs from "./components/Inputs.js";
import ScrollViewExample from "./components/ScrollView.js";
import ImagesExample from "./components/ImageExample.js";
import NetImagesExample from "./components/NetImageExample.js";
import HttpExample from "./components/HttpExample.js";

export default class App extends React.Component {
  state = {
    myState: "This is my message."
  };

  updateState = () => this.setState({ myState: "The state is updated" });

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView1}>
          <HttpExample />
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
        <ScrollView>
          <ScrollViewExample />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24
  },
  scrollView1: {
    height: 600
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

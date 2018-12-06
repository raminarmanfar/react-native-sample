import React from "react";
import PresentationalComponent from "./PresentationalComponent";
import List from "./List.js";
import Inputs from "./Inputs.js";
import ScrollViewExample from "./ScrollView.js";
import ImagesExample from "./ImageExample.js";
import NetImagesExample from "./NetImageExample.js";
import HttpExample from "./HttpExample.js";
import ButtonsExample from "./ButtonsExample.js";
import AnimationExample from "./AnimationExample.js";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";

export default class Home extends React.Component {
  state = {
    myState: "This is my message."
  };
  updateState = () => this.setState({ myState: "The state is updated" });
  goToAbout = () => Actions.about();

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText} onPress={this.goToAbout}>
            About Me
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView1}>
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
        <ScrollView style={styles.scrollView2}>
          <ScrollViewExample />
          <ButtonsExample />
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
    height: "60%"
  },
  scrollView2: {
    height: "40%"
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
  },
  btnContainer: {
    alignItems: "center",
    margin: 10
  },
  btnText: {
    borderWidth: 1,
    padding: 15,
    width: 150,
    borderColor: "blue",
    backgroundColor: "lightgreen",
    textAlign: "center"
  }
});

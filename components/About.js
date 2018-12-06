import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import ScrollViewExample from "./ScrollView.js";
import ButtonsExample from "./ButtonsExample.js";

const About = () => {
  const goToHome = () => Actions.home();

  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={goToHome}>
        <Text style={styles.btnText}>Goto Main Page</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        <ScrollViewExample />
        <ButtonsExample />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: "90%"
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

export default About;

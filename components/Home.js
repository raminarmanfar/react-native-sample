import React from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView
} from "react-native";

export default class Home extends React.Component {
  updateState = () => this.setState({ myState: "The state is updated" });

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scroll}>
          <StatusBar
            barStyle="light-content" // dark-content, default
            hidden={false}
            backgroundColor="#00BCD4"
            translucent={true}
          />
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.mainPage()}
          >
            <Text style={styles.btnText}>Main Page</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.about()}
          >
            <Text style={styles.btnText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.webView()}
          >
            <Text style={styles.btnText}>Web View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.modal()}
          >
            <Text style={styles.btnText}>Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.activityIndicator()}
          >
            <Text style={styles.btnText}>Activity Indicator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.picker()}
          >
            <Text style={styles.btnText}>Picker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.switchContainer()}
          >
            <Text style={styles.btnText}>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.text()}
          >
            <Text style={styles.btnText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.alert()}
          >
            <Text style={styles.btnText}>Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => Actions.geolocation()}
          >
            <Text style={styles.btnText}>Geolocation</Text>
          </TouchableOpacity>
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

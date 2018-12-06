import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

class PickerExample extends Component {
  state = { user: "" };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Ramin" value="ramin" />
          <Picker.Item label="Roya" value="roya" />
          <Picker.Item label="Felix" value="felix" />
          <Picker.Item label="Milad" value="milad" />
        </Picker>
        <Text style={styles.text}>Hello {this.state.user}</Text>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red"
  }
});

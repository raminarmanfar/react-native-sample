import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

const ButtonsExample = () => {
  const handlePress = () => false;
  return (
    <View>
      <Button onPress={handlePress} title="Button" color="red" />
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Touchable</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.btnContainer}>
        <Text style={styles.btnText}>Highlight</Text>
      </TouchableHighlight>
      <View style={styles.btnContainer}>
        <TouchableNativeFeedback>
          <Text style={styles.btnText}>Button</Text>
        </TouchableNativeFeedback>
      </View>
      <TouchableWithoutFeedback>
        <Text>Button</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default ButtonsExample;

import React from "react";
import { StyleSheet, StatusBar, Platform } from "react-native";
import { Header } from "react-native-elements";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        centerComponent={{
          text: "Badtemperaturer i Karlskrona",
          style: { color: "#fff", fontSize: 20 }
        }}
        outerContainerStyles={styles.header}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    ...(Platform.OS === "android"
      ? {
          paddingTop: 15 + StatusBar.currentHeight,
          height: 85
        }
      : { height: 85 }),
    paddingBottom: 15,
    borderBottomWidth: 0
  }
});

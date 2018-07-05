import React from "react";
import { Text, StyleSheet, Linking, View } from "react-native";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.footer}>
          Byggd av{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://github.com/cederstrom/karlskrona-badtemperatur"
              )
            }
          >
            Andreas Cederström
          </Text>
          {". "}
          Baserad på data från Karlskrona kommun och All Binary. Mer info på{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://buoy.ioe.allbin.se")}
          >
            https://buoy.ioe.allbin.se
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    color: "gray",
    paddingTop: 20,
    paddingBottom: 20,
    padding: 15
  },
  link: {
    color: "blue"
  }
});

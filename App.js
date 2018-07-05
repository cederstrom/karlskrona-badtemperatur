import React from "react";
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Linking
} from "react-native";
import { Card, Header } from "react-native-elements";
import moment from "moment/min/moment-with-locales";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    moment.locale("sv-SE");
  }

  componentDidMount() {
    return fetch("https://api.ioe.allbin.se/buoys")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.sort(this.bouySort)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  bouySort(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  onRefresh = () => {
    this.componentDidMount();
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Header
          centerComponent={{
            text: "Badtemperaturer i Karlskrona kommun",
            style: { color: "#fff" }
          }}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this.onRefresh}
            />
          }
        >
          {this.state.dataSource.map((item, i) => (
            <Card key={i}>
              <Text h1 style={{ fontWeight: "bold", fontSize: 20 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                {Math.round(item.temperature)}°C
              </Text>
              <Text style={{ color: "gray", fontSize: 10 }}>
                Uppdaterad {moment(new Date(item.time)).fromNow()}
              </Text>
            </Card>
          ))}
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              paddingTop: 20,
              padding: 15
            }}
          >
            Byggd av Andreas Cederström med data från Karlskrona kommun och All
            Binary. Mer info på{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("https://buoy.ioe.allbin.se")}
            >
              https://buoy.ioe.allbin.se
            </Text>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

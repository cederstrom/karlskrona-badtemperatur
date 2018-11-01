import React from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import moment from "moment/min/moment-with-locales";
import "moment/locale/sv";
import Footer from "./components/Footer";
import BouyCard from "./components/BouyCard";
import Header from "./components/Header";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    moment.locale("sv");
  }

  componentDidMount() {
    return fetch("https://api.ioe.allbin.se/buoys")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.sort(this._bouySort)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _bouySort(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  _onRefresh = () => {
    this.componentDidMount();
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this.state.dataSource.map((item, i) => (
            <BouyCard key={i} item={item} />
          ))}
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: "blue"
  }
});

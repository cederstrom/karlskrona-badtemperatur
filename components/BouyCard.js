import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import moment from "moment/min/moment-with-locales";

export default class BouyCard extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
  }

  render() {
    return (
      <Card>
        <Text h1 style={{ fontWeight: "bold", fontSize: 20 }}>
          {this.item.name}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>
          {Math.round(this.item.temperature)}°C
        </Text>
        <Text style={{ color: "gray", fontSize: 10 }}>
          Uppdaterad {moment(new Date(this.item.time)).fromNow()}
        </Text>
      </Card>
    );
  }
}

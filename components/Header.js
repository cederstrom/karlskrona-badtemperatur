import React from "react";
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
      />
    );
  }
}

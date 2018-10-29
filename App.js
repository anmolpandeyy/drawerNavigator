import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

class App extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

export default App;

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "react-navigation";
import SettingsScreen from "./SettingsScreen";
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarOptions: {
        activeTintColor: "red"
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarOptions: {
        activeTintColor: "red"
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="setting" color={tintColor} size={24} />
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

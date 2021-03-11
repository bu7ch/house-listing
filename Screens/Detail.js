import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";


const Detail = ({navigation}) => {
  const item = navigation.getParam('item', {});
  return (
  <View style={styles.container}>
    <Text>{item.title}</Text>
    
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Detail;

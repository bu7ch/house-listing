import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';

const Home = ({navigation}) => {
  return(
  <View style={styles.container}>
    <Text>Home!</Text>
    <Button
      onPress={() => navigation.navigate("Detail")}
      title="Aller à Detail"
    />
    <StatusBar style="auto" />
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
export default Home;

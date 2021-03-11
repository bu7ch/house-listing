import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";


const Detail = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Voici un Detail</Text>
    <Button
      onPress={() => navigation.goBack()}
      title=" Retour à Home"
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
export default Detail;

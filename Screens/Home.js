import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import styled from 'styled-components/native';

import ListingItem from '../components/Listing/ListingItem'
import houses from  '../mockData.json'

const ListingsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Listings = styled(FlatList)`
  width: 100%;
  padding: 2%;
`;

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const fetchAPI = async () => {
    try {
      const data = await houses;
      if (data) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
      <ListingsWrapper>
        {!loading && !error && (
          <Listings
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ListingItem item={item} navigation={navigation} />
            )}
          />
        )}
      </ListingsWrapper>
    );
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

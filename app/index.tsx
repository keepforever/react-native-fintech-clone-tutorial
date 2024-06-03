import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        Your New Stateless Functional Component
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
  },
  bigText: {
    fontSize: 30,
  },
});

import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SignupProps {
  // Define props if there are any, otherwise leave empty
}

export const Signup: React.FC<SignupProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

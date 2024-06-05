import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface HelpProps {
  // Define props if there are any, otherwise leave empty
}

export const Help: React.FC<HelpProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello Help</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default Help;

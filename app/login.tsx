import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface LoginProps {
  // Define props if there are any, otherwise leave empty
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

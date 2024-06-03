import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>

      <View style={styles.buttons}>
        <Link href={"/login"} style={styles.loginButton} asChild>
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/signup"} style={styles.signupButton} asChild>
          <TouchableOpacity>
            <Text style={styles.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginTop: 80,
    padding: 20,
  },
  loginButton: {
    ...defaultStyles.pillButton,
    flex: 1,
    backgroundColor: Colors.dark,
  },
  loginButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  signupButton: {
    ...defaultStyles.pillButton,
    flex: 1,
    backgroundColor: "#fff",
  },
  signupButtonText: {
    fontSize: 22,
    fontWeight: "500",
  },
});

export default Page;

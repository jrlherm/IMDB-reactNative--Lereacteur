import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require("./assets/logo-IMDB.png")}
        style={styles.logoStyle}
      />
      <View style={styles.header}></View>
      <View style={styles.cards}>
        <Text>Interstellar</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "pink",
  },
  // container: {
  //   backgroundColor: "red",
  // },
  // img: { width: "100%", height: 200, resizeMode: "contain" },
  cards: { backgroundColor: "" },
  logoStyle: {
    width: 50,
    resizeMode: "contain",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "green",
  },
  title: {
    color: "white",
    fontSize: "48px",
  },
});

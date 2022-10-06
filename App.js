import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SubRoot } from "./src/SubRoot";
export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <Suspense fallback={null}>
          <SubRoot />
        </Suspense>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

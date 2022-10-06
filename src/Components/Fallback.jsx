import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useParams } from "react-router-dom";

export function Fallback() {
  const params = useParams();

  return (
    <View style={styles.container}>
      <Text>FALLBACK un subpackage!!!</Text>
      <StatusBar style="auto" />
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

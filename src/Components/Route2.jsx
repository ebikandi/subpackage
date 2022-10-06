import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useParams } from "react-router-dom";

export function Route2() {
  const params = useParams();

  console.log("[LOG]: params from subpckage Route2", params);
  return (
    <View style={styles.container}>
      <Text>ROUTE 2 FTW!!!!!!</Text>
      <Text>RouteId: {params.routeId}</Text>
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

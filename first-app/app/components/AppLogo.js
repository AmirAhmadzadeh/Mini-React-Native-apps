import React from "react";
import { StyleSheet ,  View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./AppText";

export default function () {
  return (
    <View style={styles.logo}>
      <AntDesign name="home" size={200} color="orange" />
      <AppText>Hello and Welcome Please Enter</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { position: "absolute", top: 30, alignItems: "center" },
});

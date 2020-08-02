import React from "react";
import { StyleSheet, Text } from "react-native";

export default function (props) {
  return <Text style={[styles.appText , props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  appText: { fontFamily: "Roboto", fontSize: 20, fontWeight: "900" },
});

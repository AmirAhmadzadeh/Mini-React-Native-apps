import React from "react";
import { TouchableOpacity , StyleSheet} from "react-native";
import AppText from "./AppText";

export default function ({ type }) {
  return (
    <TouchableOpacity style={[styles.btn, styles[`${type}`]]}>
      <AppText>
        {type === "loginBtn" ? "Login" : "Register"}{" "}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "95%",
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    backgroundColor: "orange",
  },
  loginBtn: {
    backgroundColor: "dodgerblue",
  },
});

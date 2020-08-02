import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
    Platform
} from "react-native";
import AppLogo from '../components/AppLogo' ;
import AppButton from '../components/AppButton' ;

export default function () {
  return (
    <ImageBackground
      style={styles.backImage}
      blurRadius={10}
      source={require("../../assets/30.jpg")}
    >
        <AppLogo/>
      <View style={styles.buttonsContainer}>
          <AppButton type="loginBtn"  />
          <AppButton type="registerBtn"  />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backImage: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
      alignItems:"center"
  },
  buttonsContainer: {
      width : "100%" ,
      alignItems : "center"
  }
});

import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

export default function ({desc , price }) {
  return (
    <View style={styles.root}>
      <Image resizeMode="cover"  style={styles.image} source={require("../../assets/30.jpg")} />
      <View style={styles.cardDescription}>
        <AppText style={styles.title} >{desc}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    borderRadius: 15,
    flexBasis: 300,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height:200,
    borderTopLeftRadius: 15,
    borderTopRightRadius:15,
  },
  cardDescription: {
    padding: 20,
      marginBottom : 25
  },
    title : {  marginBottom : 7 } ,
    price : { color : "dodgerblue"  , fontWeight : "bold"}
});

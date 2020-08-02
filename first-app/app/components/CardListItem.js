import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "./AppText";


export default function({title, subTitle}) {
  return (
    <View style={styles.author}>
        <Image
          source={require("../../assets/me2.jpg")}
          style={styles.authorImage}
        />
        <View style={styles.authorDetail}>
          <AppText style={styles.authorName}>{title}</AppText>
          <AppText style={styles.authorListingNumbers}>{subTitle}</AppText>
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
  authorName: { fontSize: 20, marginBottom: 3 },
  authorListingNumbers: { fontSize: 18, color: "#aaa" },
  author: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 10,
      paddingLeft:15
  },
  authorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
      marginRight:10
  },
  //authorDetail: {
    //paddingLeft: 5,
  //},
});

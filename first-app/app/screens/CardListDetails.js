import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import CardListItem from "../components/CardListItem";

export default function () {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/30.jpg")} />
      <View style={styles.desc}>
        <AppText style={styles.title}>Beautiful Cat</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <CardListItem
          title="AmirArsalan Ashkan"
          subTitle="5 Listening"
        />
    </View>
  );
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
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  authorDetail: {
    padding: 10,
  },
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f2f2f4",
  },

  image: {
    width: "100%",
    height: 300,
  },
  desc: {
    padding: 20,
  },

  price: {
    color: "dodgerblue",
    fontSize: 30,
    fontWeight: "bold",
  },

  title: { fontSize: 25, fontWeight: "500" },
});

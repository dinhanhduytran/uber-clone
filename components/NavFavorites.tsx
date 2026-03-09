import React from "react";
import { Text, View } from "react-native";

export default function NavFavorites() {
  const data = [
    {
      _id: "301",
      icon: "home",
      location: "Home",
      destination: "Mirpur 11, Dhaka, Bangladesh",
    },
    {
      _id: "302",
      icon: "briefcase",
      location: "Work",
      destination: "Mirpur 10, Dhaka, Bangladesh",
    },
  ];
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  );
}

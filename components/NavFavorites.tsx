import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import tw from "twrnc";

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
    <FlatList
      data={data}
      keyExtractor={(item) => item?._id}
      ItemSeparatorComponent={() => (
        <View style={[tw` bg-gray-300`, { height: 1 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`p-5 flex-row items-center`}>
          {/* <Ionicons name={icon} size={20} color="black" /> */}
          <View>
            <Text style={tw`text-lg font-semibold`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

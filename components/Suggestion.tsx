import { suggestionsData } from "@/constants";
import { Link, useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function Suggestion() {
  const router = useRouter();
  return (
    <View>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-xl font-semibold`}>Suggestions</Text>
        <Link href={"/services"}>
          <Text style={tw`text-base font-semibold`}>See all</Text>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={suggestionsData}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-5 border border-gray-300 mt-3 mr-3 rounded-lg`}
            onPress={() => router.push("/map")}
          >
            <Image
              source={{ uri: item?.image }}
              style={tw`w-16 h-16 mb-3`}
              resizeMode="contain"
            />
            <Text>{item?.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

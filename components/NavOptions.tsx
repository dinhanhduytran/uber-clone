import { navData } from "@/constants";
import { selectOrigin } from "@/store/uberSlice";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function NavOptions() {
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      horizontal
      data={navData}
      keyExtractor={(item) => item?._id}
      renderItem={({ item }) => (
        <View
          style={tw`mt-3 pl-6 p-4 bg-gray-200 mr-4 rounded-lg border border-gray-300`}
        >
          <View style={tw`${origin ? "opacity-100" : "opacity-20"}`}>
            <Image
              source={item?.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text style={tw`py-2 text-lg font-bold`}>{item?.title}</Text>
            <Link href={"/map"} disabled={!origin}>
              <View
                style={tw`p-2 bg-black rounded-full w-10 h-10 items-center justify-center`}
              >
                <Ionicons name="arrow-forward" size={18} color="white" />
              </View>
            </Link>
          </View>
        </View>
      )}
    />
  );
}

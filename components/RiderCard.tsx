import { uberLux, uberX, uberXL } from "@/assets/images";
import { selectTravelTimeInformation } from "@/store/uberSlice";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import tw from "twrnc";

type RideOption = {
  _id: string;
  title: string;
  multiplier: number;
  image: any;
};
const data: RideOption[] = [
  {
    _id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: uberX,
  },
  {
    _id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: uberXL,
  },
  {
    _id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: uberLux,
  },
];

interface RiderCardProps {
  setShowRider: Dispatch<SetStateAction<boolean>>;
}

export default function RiderCard({ setShowRider }: RiderCardProps) {
  const [selected, setSelected] = useState<RideOption | null>(null);
  const insets = useSafeAreaInsets();

  const travelTimeInformation = useSelector(
    selectTravelTimeInformation || {
      distance: { text: "No distance", value: 0 },
      duration: { text: "No duration", value: 0 },
    },
  );
  console.log(travelTimeInformation);
  const CHARGE_RATE = 1.2;
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <View style={tw`relative pb-2`}>
        <TouchableOpacity
          onPress={() => {
            setShowRider(false);
          }}
          style={tw`absolute top-1 left-5 rounded-full bg-gray-200 p-1 z-10`}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center font-medium text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        style={tw`flex-1`}
        contentContainerStyle={tw`pb-24`}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between rounded-md mt-3 px-2 ${item?._id === selected?._id ? "bg-gray-200" : ""}`}
          >
            <Image
              source={item?.image}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View style={tw``}>
              <Text style={tw`text-lg font-semibold`}>{item?.title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>
            <Text>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.distance?.value *
                  CHARGE_RATE *
                  item?.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={[tw`border-t border-t-gray-200 pt-2`]}>
        <TouchableOpacity
          onPress={() => {
            setShowRider(false);
            navigation.goBack();
          }}
          disabled={!selected}
          style={tw`py-3 mx-3 rounded-md ${!selected ? "bg-gray-300" : "bg-black"}`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

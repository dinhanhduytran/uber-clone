import { setDestination } from "@/store/uberSlice";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import NavFavorites from "./NavFavorites";
import RiderCard from "./RiderCard";

export default function NavigateCard() {
  const [showRider, setShowRider] = useState(false);
  const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const dispatch = useDispatch();
  return (
    <View style={tw`flex-1 p-5`}>
      {showRider ? (
        <View style={tw`flex-1`}>
          <RiderCard setShowRider={setShowRider} />
        </View>
      ) : (
        <>
          <Text style={tw`text-center text-xl font-semibold`}>Hello, John</Text>
          <View>
            <GooglePlacesAutocomplete
              styles={inputBoxStyle}
              placeholder="Where To?"
              query={{ key: GOOGLE_MAPS_API_KEY, language: "en" }}
              fetchDetails={true}
              enableHighAccuracyLocation={true}
              debounce={400}
              nearbyPlacesAPI="GooglePlacesSearch"
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details?.geometry?.location,
                    description: data.description,
                  }),
                );
              }}
            />
            <NavFavorites />
            <View
              style={tw`flex-row bg-white items-center justify-evenly py-2 mt-auto border-t border-t-gray-300`}
            >
              <TouchableOpacity
                onPress={() => setShowRider(true)}
                style={tw`flex-row items-center justify-between bg-black w-24 px-4 py-3 rounded-full`}
              >
                <Ionicons name="car" size={20} color="white" />
                <Text style={tw`text-white text-center`}>Ride</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex flex-row items-center justify-between w-24 px-4 py-3 rounded-full border border-gray-300`}
              >
                <Ionicons name="fast-food-outline" color="black" size={20} />

                <Text style={tw`text-center ml-1`}>Eats</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const inputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 20,
    backgroundColor: "#ddddddd20",
    borderWidth: 1,
    borderColor: "#00000050",
    borderRadius: 50,
  },
  textInputContainer: {
    paddingBottom: 0,
  },
});

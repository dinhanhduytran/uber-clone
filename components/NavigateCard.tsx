import { setDestination } from "@/store/uberSlice";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import Container from "./Container";
import NavFavorites from "./NavFavorites";

export default function NavigateCard() {
  const [showRider, setShowRider] = useState(false);
  const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const dispatch = useDispatch();
  return (
    <Container>
      {showRider ? (
        <View>
          <Text>Rider</Text>
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
          </View>
        </>
      )}
    </Container>
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

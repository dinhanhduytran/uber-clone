import { setDestination, setOrigin } from "@/store/uberSlice";
import { StyleSheet, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      styles={inputBoxStyle}
      placeholder="Where From?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en", // language of the results
      }}
      //   onPress={(data, details) => console.log(data, details)}
      textInputProps={{
        autoCapitalize: "none",
        autoCorrect: false,

        InputComp: TextInput,
        selectionColor: "blue",
        leftIcon: { type: "font-awesome", name: "chevron-left" },
        errorStyle: { color: "red" },
      }}
      minLength={2}
      enableHighAccuracyLocation={true}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details?.geometry?.location,
            description: data.description,
          }),
        );
        dispatch(setDestination(null));
      }}
    />
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

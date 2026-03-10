import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "@/store/uberSlice";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";

export default function MapContent() {
  const mapRef = useRef<MapView>(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin?.location || !destination?.location || !mapRef.current) return;

    // Zoom to fit the markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${googleMapsApiKey}`,
        );
        const data = await response?.json();
        console.log(data);
        dispatch(
          setTravelTimeInformation({
            distance: data?.rows[0]?.elements[0]?.distance,
            duration: data?.rows[0]?.elements[0]?.duration,
          }),
        );
      } catch (error) {
        console.log("Error fetching travel time:", error);
      }
    };
    getTravelTime();
  }, [origin, destination]);
  console.log("diem den", destination);
  console.log("diem di", origin);

  return (
    <View style={tw`flex-1`}>
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        provider={PROVIDER_GOOGLE}
        mapType="mutedStandard"
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        scrollDuringRotateOrZoomEnabled={true}
        initialRegion={{
          latitude: origin?.location?.lat!,
          longitude: origin?.location?.lng!,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        loadingEnabled={true}
      >
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={googleMapsApiKey}
        /> */}
        {origin && destination && googleMapsApiKey && (
          // <MapViewDirections
          //   origin={origin?.location}
          //   destination={destination?.location}
          //   apikey={googleMapsApiKey}
          //   strokeWidth={3}
          //   strokeColor="black"
          // />
          <MapViewDirections
            origin={origin?.description}
            destination={destination?.description}
            apikey={googleMapsApiKey}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin?.location?.lat!,
              longitude: origin?.location?.lng!,
            }}
            title="Origin"
            description={origin?.description}
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination?.location?.lat!,
              longitude: destination?.location?.lng!,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

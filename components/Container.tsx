import React from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <SafeAreaView
      style={tw`flex-1 bg-white ${Platform.OS === "android" ? "mt-5" : "mt-0"}`}
    >
      <View style={[tw`p-5`, className ? tw`${className}` : null]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

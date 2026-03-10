import Container from "@/components/Container";
import Title from "@/components/Title";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { View } from "react-native";
import tw from "twrnc";

const Activity = () => {
  return (
    <Container>
      <Title>Activity</Title>
      <View style={tw`py-3 flex-row items-center justify-between`}>
        <View
          style={tw`w-10 h-10 rounded-full bg-black items-center justify-center`}
        >
          <Ionicons name="options" size={20} color={"white"} />
        </View>
        <Title className="text-xl">Past</Title>
      </View>
      <Title className="text-lg font-normal mt-3">
        You don't have any recent activities
      </Title>
    </Container>
  );
};

export default Activity;

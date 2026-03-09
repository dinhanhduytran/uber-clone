import Container from "@/components/Container";
import MapContent from "@/components/MapContent";
import NavigateCard from "@/components/NavigateCard";
import { View } from "react-native";
import tw from "twrnc";

export default function MapScreen() {
  return (
    <Container className="flex-1 p-0">
      <View style={tw`flex-1`}>
        <MapContent />
      </View>
      <View style={tw`flex-1 bg-red-400`}>
        <NavigateCard />
      </View>
    </Container>
  );
}

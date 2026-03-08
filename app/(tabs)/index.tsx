import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import { Image } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <Container>
      <Image
        source={{ uri: "https://i.ibb.co.com/Xz5pKDQ/logo-black.png" }}
        style={tw`w-24 h-10`}
        resizeMode="contain"
      />
      {/* Searchbar */}
      <SearchBar />
      {/* Nav options */}
      {/* Suggestions */}
    </Container>
  );
}

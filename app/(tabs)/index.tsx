import Container from "@/components/Container";
import NavOptions from "@/components/NavOptions";
import SearchBar from "@/components/SearchBar";
import Suggestion from "@/components/Suggestion";
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
      <NavOptions />
      {/* Suggestions */}
      <Suggestion />
    </Container>
  );
}

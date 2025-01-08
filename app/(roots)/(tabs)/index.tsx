import {  Text, View } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to the Home Page</Text>
      <Link href="/sigin-in"> Sign In </Link>
      <Link href="/explore"> Explore </Link>
      <Link href="/profiles"> Profile </Link>
      <Link href="/properties/1"> Property </Link>
    </View>
  );
}

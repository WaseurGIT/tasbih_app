import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (path) => pathName === path;

  return (
    <View className="w-full items-center py-3">
      <View className="flex-row items-center justify-center gap-8">
        <View className="flex-row items-center gap-10 bg-[#FFDEA5] rounded-full py-4 px-5 rounded-3xl">
          <TouchableOpacity
            className="flex-col items-center"
            onPress={() => router.push("/")}
          >
            <FontAwesome
              name="home"
              size={24}
              color={isActive("/") ? "#FF7F50" : "black"}
            />
            <Text
              className={`text-sm ${isActive("/") ? "text-[#FF7F50]" : "text-black"}`}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center">
            <Ionicons name="cube-sharp" size={24} color="black" />
            <Text
              className={`text-sm ${isActive("/components/Library") ? "text-[#FF7F50]" : "text-black"}`}
            >
              Dua
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center">
            <AntDesign name="pie-chart" size={24} color="black" />
            <Text
              className={`text-sm ${isActive("/components/DailyProgress") ? "text-[#FF7F50]" : "text-black"}`}
            >
              Daily Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col items-center"
            onPress={() => router.push("/components/Profile")}
          >
            <FontAwesome
              name="user"
              size={24}
              color={isActive("/components/Profile") ? "#FF7F50" : "black"}
            />
            <Text
              className={`text-sm ${isActive("/components/Profile") ? "text-[#FF7F50]" : "text-black"}`}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

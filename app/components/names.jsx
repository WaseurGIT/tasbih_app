import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import names from "../data/namesOfALLAH.json";
import { AntDesign } from "@expo/vector-icons";

const Names = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#FFEFD7] px-4">
      <FlatList
        data={names}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-white p-4 mb-4 shadow-md border rounded-xl border-[#AF8B47]">
            <View>
              <Text className="text-lg font-bold text-[#5D4201] text-center">
                {item.name}
              </Text>
              <Text className="text-sm text-[#003829] text-center italic mt-1">
                {item.meaning}
              </Text>
            </View>
            <View>
              <AntDesign name="play-circle" size={24} color="black" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Names;

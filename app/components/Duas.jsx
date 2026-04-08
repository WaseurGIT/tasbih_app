import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import duas from "../data/duas.json";

const Duas = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFEFD7] px-4">
      <FlatList
        data={duas}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              className="flex-row items-center justify-between bg-[#CBA65E] px-4 py-2 mb-2 shadow-md border rounded-xl border-[#AF8B47]"
              onPress={() => toggleExpand(item.id)}
            >
              <View className="flex-col items-start">
                <Text className="text-white text-xl font-bold italic">&quot;{item.title}&quot;</Text>
                <Text className="text-white text-sm">{item.bangla}</Text>
              </View>
              <Entypo
                name={
                  expanded === item.id
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="white"
              />
            </TouchableOpacity>
            {expanded === item.id && (
              <View>
                {duas.map((dua) => (
                  <View
                    key={dua.id}
                    className={`bg-white p-4 mb-4 shadow-md border rounded-xl border-[#AF8B47] ${
                      expanded === dua.id ? "block" : "hidden"
                    }`}
                  >
                    <Text className="text-lg font-bold text-[#45826C] text-center">
                      &quot;{dua.dua}&quot;
                    </Text>
                    <Text className="text-lg mt-2 font-bold text-[#5D4201] text-center">
                      &quot;{dua.meaning}&quot;
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Duas;

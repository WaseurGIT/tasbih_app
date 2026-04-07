import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [goalValue, setGoalValue] = useState(0);
  const [selectZikr, setSelectZikr] = useState("");
  const [zikrMeaning, setZikrMeaning] = useState("");

  const handleCounter = () => {
    if (goalValue === 0) {
      Alert.alert("Issue", `Please set a goal value before counting.`);
      return;
    }
    setCounter(counter + 1);
    if (counter === goalValue - 1) {
      Alert.alert(
        "Congratulations!",
        `You have reached your goal of ${goalValue} counts!`,
      );
      setCounter(0);
      setGoalValue(0);
      setSelectZikr("");
      setZikrMeaning("");
    }
  };

  const handleReset = () => {
    setCounter(0);
    setGoalValue(0);
    setSelectZikr("");
    setZikrMeaning("");
  };

  const handleSelectZikr = (zikr: string) => {
    setSelectZikr(zikr);
  };

  const handleSelectZikrMeaning = (meaning: string) => {
    setZikrMeaning(meaning);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFEFD7]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        <ScrollView
          className="flex-1 mb-14"
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-row items-center justify-center my-8">
            <Text className="text-2xl font-bold text-[#5D4201]">
              Al Tasbih App
            </Text>
          </View>

          <View className="flex-col items-center mt-16">
            <Text className="text-xl text-[#AF8B47]">
              {selectZikr || "SUBHAN ALLAH"}
            </Text>
            <Text className="text-lg text-[#003829] italic">
              &quot;{zikrMeaning || "GLORY BE TO ALLAH"}&quot;
            </Text>
          </View>

          <View className="items-center justify-center m-8">
            <View className="border-2 border-[#AF8B47] rounded-full p-4">
              <TouchableOpacity
                style={{ width: 190, height: 190 }}
                className="bg-white rounded-full flex-col items-center justify-center shadow-md"
                onPress={handleCounter}
              >
                <Text className="text-6xl font-bold text-[#5D4201]">
                  {counter}
                </Text>
                <Text className="text-sm text-[#003829]">Current Count</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center w-full justify-between px-14">
            <View className="flex-col items-center bg-[#FFDEA5] px-14 py-6 rounded-3xl shadow-md">
              <Text className="text-sm">GOAL</Text>
              <TextInput
                className="text-4xl font-bold text-[#5D4201]"
                value={goalValue.toString()}
                editable={true}
                keyboardType="numeric"
                onChangeText={(text) => setGoalValue(Number(text))}
                placeholder="0"
                placeholderTextColor="#5D4201"
              />
            </View>
            <TouchableOpacity
              onPress={handleReset}
              className="flex-col items-center gap-2 bg-[#FFDEA5] px-14 py-9 rounded-3xl shadow-md"
            >
              <Image
                source={require("../assets/reset.png")}
                className="w-8 h-8"
              />
              <Text className="text-sm">RESET</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              className="border border-[#AF8B47] rounded-full p-4 mt-12 items-center justify-center"
              onPress={() => {
                handleSelectZikr("Subhan ALLAH");
                handleSelectZikrMeaning("GLORY BE TO ALLAH");
              }}
            >
              <Text className="text-xl font-semibold">SUBHAN ALLAH</Text>
              <Text className="text-sm text-[#003829] italic">
                GLORY BE TO ALLAH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#AF8B47] rounded-full p-4 mt-2 items-center justify-center"
              onPress={() => {
                handleSelectZikr("ALLAHU AKBAR");
                handleSelectZikrMeaning("ALLAH IS GREATER");
              }}
            >
              <Text className="text-xl font-semibold">ALLAHU AKBAR</Text>
              <Text className="text-sm text-[#003829] italic">
                ALLAH IS GREATER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#AF8B47] rounded-full p-4 mt-2 items-center justify-center"
              onPress={() => {
                handleSelectZikr("LA ILAHA ILLALLAH");
                handleSelectZikrMeaning("THERE IS NO GOD BUT ALLAH");
              }}
            >
              <Text className="text-xl font-semibold">LA ILAHA ILLALLAH</Text>
              <Text className="text-sm text-[#003829] italic">
                THERE IS NO GOD BUT ALLAH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#AF8B47] rounded-full p-4 mt-2 items-center justify-center"
              onPress={() => {
                handleSelectZikr("ALHAMDULLILLAH");
                handleSelectZikrMeaning("ALLAH IS TO BE PRAISED");
              }}
            >
              <Text className="text-xl font-semibold">ALHAMDULLILLAH</Text>
              <Text className="text-sm text-[#003829] italic">
                ALLAH IS TO BE PRAISED
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-[#AF8B47] rounded-full p-4 mt-2 items-center justify-center"
              onPress={() => {
                handleSelectZikr("ASTAGFIRULLAH");
                handleSelectZikrMeaning("I SEEK FORGIVENESS FROM ALLAH");
              }}
            >
              <Text className="text-xl font-semibold">ASTAGFIRULLAH</Text>
              <Text className="text-sm text-[#003829] italic">
                I SEEK FORGIVENESS FROM ALLAH
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../app/components/Navbar";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 relative">
        <StatusBar style="auto" hidden={false} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="library" options={{ headerShown: false }} />
          <Stack.Screen name="dailyProgress" options={{ headerShown: false }} />
        </Stack>
        <View className="absolute bottom-0 left-0 right-0">
          <Navbar />
        </View>
      </View>
    </SafeAreaView>
  );
}

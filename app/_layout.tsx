import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <StatusBar style="auto" hidden={false} />
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              headerStyle: {
                height: 80,
                backgroundColor: "#FFEFD7",
              },
              headerTitle: () => (
                <Text className="text-2xl font-bold text-[#5D4201]">
                  AL Tasbih App
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="components/library"
            options={{
              drawerLabel: "Library",
              title: "Library",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="components/dailyProgress"
            options={{
              drawerLabel: "Daily Progress",
              title: "Daily Progress",
              headerShown: false,
            }}
          />
        </Drawer>
      </View>
    </SafeAreaView>
  );
}

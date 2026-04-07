import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 relative">
        <StatusBar style="auto" hidden={false} />
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="library"
            options={{
              drawerLabel: "Library",
              title: "Library",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="dailyProgress"
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

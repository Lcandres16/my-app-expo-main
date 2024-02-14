import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();

  const tabOptions = (name, title, iconName) => ({
    title,
    tabBarIcon: (props) => (
      <MaterialCommunityIcons name={iconName} {...props} />
    ),
    headerLeft: () => (
      <Button ml="$2.5" onPress={() => router.push("/")}>
        <MaterialCommunityIcons name="arrow-left" />
      </Button>
    ),
  });

  return (
    <Tabs>
      <Tabs.Screen name="tab-films" options={tabOptions("tab-films", "Films", "filmstrip")} />
      <Tabs.Screen name="tab-scene" options={tabOptions("tab-scene", "Scene", "camera")} />
      <Tabs.Screen name="tab-characters" options={tabOptions("tab-characters", "Character", "account-outline")} />
    </Tabs>
  );
}

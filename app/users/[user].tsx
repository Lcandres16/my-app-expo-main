import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Button, H6 } from "tamagui";
import DialogDemo from "../../components/DialogDemo";
import SelectDemo from "../../components/SelectDemo";
import SpinnerDemo from "../../components/SpinnerDemo";
import SwitchDemo from "../../components/SwitchDemo";
import { MyStack } from "../../components/MyStack";

export default function User() {
  const router = useRouter();
  const params = useSearchParams();

  const renderHeaderLeft = () => {
    return (
      <Button mr="$2.5" onPress={router.back}>
        <MaterialCommunityIcons name="arrow-left" />
      </Button>
    );
  };

  return (
    <MyStack justifyContent="flex-start">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `${params.user}'s user page`,
          headerLeft: renderHeaderLeft
        }}
      />
      <H6>Some Tamagui components in action.</H6>
      <DialogDemo />
      <SelectDemo />
      <SpinnerDemo />
      <SwitchDemo />
    </MyStack>
  );
}

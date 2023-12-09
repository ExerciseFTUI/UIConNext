import { useNavigation } from "expo-router";
import { Image, Pressable } from "react-native";
import { DrawerActions } from "@react-navigation/native";

export function AvatarHeader() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
        }}
        style={{ width: 30, aspectRatio: 1, borderRadius: 40, marginRight: 10 }}
      />
    </Pressable>
  );
}

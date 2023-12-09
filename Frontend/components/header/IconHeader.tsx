import { Pressable } from "react-native";
import { styles } from "./Header.style";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export function IconHeader() {
  const router = useRouter();

  return (
    <Pressable
      style={{ ...styles.btnContainer, marginRight: 10 }}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back-outline" size={24} color="black" />
    </Pressable>
  );
}

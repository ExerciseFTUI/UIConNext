import { useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { styles } from "./Header.style";
import { DrawerActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../constants/colors";

export function MenuHeader() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{ ...styles.btnContainer, marginLeft: 10 }}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <AntDesign name="menufold" size={24} color={COLORS.primary} />
    </Pressable>
  );
}

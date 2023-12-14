import { withLayoutContext } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Dimensions, Platform, Text } from "react-native";
import { CustomDrawerContent } from "../../components/CustomDrawerContent";

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);
const width = Dimensions.get("screen").width;

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function DrawerLayout() {
  return (
    <Drawer
      // screenOptions={{
      //   drawerStyle: {
      //     width: width - width / 3,
      //   },
      // }}
      screenOptions={{
        swipeEdgeWidth: Platform.OS === "ios" ? 0 : 10
      }}
      drawerContent={(props) => <CustomDrawerContent />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
    </Drawer>
  );
}

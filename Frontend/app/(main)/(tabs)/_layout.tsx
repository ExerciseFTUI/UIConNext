import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import { Tabs, useRouter } from "expo-router";

import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { AvatarHeader } from "../../../components/header/AvatarHeader";
import { MenuHeader } from "../../../components/header/MenuHeader";
import COLORS from "../../../constants/colors";

// Hiding Tab Names...
export default function TabLayout() {
  // Animated Tab Indicator...
  //   const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          bottom: 0,
          right: 0,
          left: 0,
          // marginTop: 5,
          paddingBottom: 10,
          elevation: 0,
          height: 55,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: "center",
        headerTitle: () => (
          <Text style={{ color: COLORS.primary, fontSize: 20 }}>UIConNext</Text>
        ),
        headerRight: () => <AvatarHeader />,
        headerLeft: () => <MenuHeader />,
      }}
    >
      <Tabs.Screen
        name="main/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="main/tweet/index"
        // component={TweetScreen}
        options={{
          
        }}
      />

      <Tabs.Screen
        name="assistant/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="addPost/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary,
                  height: Platform.OS === "ios" ? 50 : 60,
                  width: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -20 : -30,
                  borderRadius: Platform.OS === "ios" ? 25 : 30,
                  borderWidth: 2,
                  borderColor: COLORS.white,
                }}
              >
                <Fontisto name="plus-a" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="person-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}

// function getWidth() {
//   let width = Dimensions.get("window").width;

//   // Horizontal Padding = 20...
//   width = width - 80;

//   // Total five Tabs...
//   return width / 5;
// }

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login Page",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: "SignUp Page",
        }}
      />
      <Stack.Screen
        name="otp"
        options={{
          headerTitle: "Otp Page",
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerTitle: "Onboarding Page",
        }}
      />
    </Stack>
  );
}

import { View, Text } from "react-native";
import React from "react";
import Card from "../components/Card";
import { Redirect } from "expo-router";

export default function Home() {
  return (
    <Redirect href={"home"}/>
  );
}

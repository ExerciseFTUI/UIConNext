import { StatusBar } from "expo-status-bar";
import { useState, Fragment } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import Tweet from "./components/Tweet";
import Profile from "./components/modals/Profile";

export default function App() {
  const [isTriggered, setIsTriggered] = useState(false);

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "red" }} />
      <SafeAreaView className="flex-1 items-center ">
        {/* Header */}
        <View className="px-5 items-center w-screen h-14 bg-light_green flex flex-row justify-between rounded-b-lg">
          <Text className="text-2xl text-primary font-bold">
            {" "}
            UI ConNexssssssssssssssssssssssst
          </Text>
          <TouchableOpacity className=" border-dark_green border rounded-lg p-3 bg-dark_green">
            <Text className="text-white" onPress={() => setIsTriggered(true)}>
              Click Here
            </Text>
          </TouchableOpacity>
        </View>
        {/* End of Header */}

        <ScrollView className="mt-2">
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>

          {/* Modal User */}
          <Profile status={isTriggered} setStatus={setIsTriggered} />
          {/* End of Modal User */}

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import { AntDesign, FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import Tweet from "../../components/Tweet";
import Profile from "../../components/modals/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import CreateOink from "../../components/modals/CreateOink";

export default function App() {
  const [isTriggered, setIsTriggered] = useState(false);
  const [createTriggered, setCreateTriggered] = useState(false);
  const [selectPost, setSelectPost] = useState("null");

  const { signOut } = useAuth();
  const doLogout = () => {
    signOut();
  };

  const router = useRouter();
  return (
    <>
      {/* <SafeAreaView style={{ flex: 0, backgroundColor: "#739072" }} /> */}
      <SafeAreaView className="flex-1 items-center bg-light_green ">
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="px-5 items-center w-screen h-14 bg-light_green flex flex-row justify-between rounded-b-lg">
            <Text className="text-2xl text-primary font-bold"> UI ConNext</Text>
            <TouchableOpacity className=" border-dark_green border rounded-lg p-3 bg-dark_green">
              <Text className="text-white" onPress={() => setIsTriggered(true)}>
                Click Here
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className=" border-dark_green border rounded-lg p-3 bg-dark_green">
              <Text className="text-white" onPress={() => doLogout()}>
                Logout +
              </Text>
            </TouchableOpacity>
          </View>
          {/* End of Header */}

          {/* <TouchableOpacity className=" border-dark_green border rounded-lg p-3 bg-dark_green">
          <Text className="text-white" onPress={() => router.push("/login")}>
            Click Here
          </Text>
        </TouchableOpacity> */}
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
    </>
  );
}

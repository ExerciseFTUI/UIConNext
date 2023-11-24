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
import Tweet from "../components/Tweet";
import Profile from "../components/modals/Profile";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [isTriggered, setIsTriggered] = useState(false);

  return (
    <>
      {/* <SafeAreaView style={{ flex: 0, backgroundColor: "#739072" }} /> */}
      <SafeAreaView className="flex-1 items-center ">
        {/* Header */}
        <View className="px-5 items-center w-screen h-14 bg-light_green flex flex-row justify-between rounded-b-lg">
            <Text className="text-2xl text-primary font-bold"> UI ConNext</Text>
            <TouchableOpacity onPress={() => setIsTriggered(true)} className=" border-dark_green border rounded-lg p-3 bg-dark_green"> 
                <Text className="text-white"  >Click Here</Text>
            </TouchableOpacity>
        </View>
        {/* End of Header */}

        <ScrollView className=' w-full px-3'>
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
            <Profile 
            status={isTriggered}
            setStatus={setIsTriggered} />
            {/* End of Modal User */}

          <StatusBar style="auto" />
        </ScrollView>

        {/* Button create Oink */}
        <TouchableOpacity className=' absolute bottom-14 right-7 flex justify-center items-center rounded-full bg-white border-light_green border-2 w-16 h-16'>
            <Ionicons name="create" size={30} color="#3A4D39" />
        </TouchableOpacity>
        {/* End of Button create Oink */}

        </SafeAreaView>
        </>
    );
}

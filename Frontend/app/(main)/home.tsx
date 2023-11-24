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

export default function App() {
  const [isTriggered, setIsTriggered] = useState(false);
  const [createTriggered, setCreateTriggered] = useState(false);
  const [selectPost, setSelectPost] = useState("");

  const { signOut } = useAuth();
  const doLogout = () => {
    signOut();
  };

  const router = useRouter();
  return (
    <>
      {/* <SafeAreaView style={{ flex: 0, backgroundColor: "#739072" }} /> */}
      <SafeAreaView className="flex-1 items-center ">
        {/* Header */}
        <View className="px-5 items-center w-screen h-14 bg-light_green flex flex-row justify-between rounded-b-lg">
          <Text className="text-2xl text-primary font-bold"> UI ConNext</Text>
          <TouchableOpacity onPress={() => setIsTriggered(true)} className=" border-dark_green border rounded-lg p-3 bg-dark_green">
            <Text className="text-white" >
              Click Here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => doLogout()} className=" border-dark_green border rounded-lg p-3 bg-dark_green">
            <Text className="text-white" >
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
        <ScrollView showsVerticalScrollIndicator={false} className=' w-full px-3'>
          <Tweet/>

          {/* Modal User */}
          <Profile status={isTriggered} setStatus={setIsTriggered} />
          {/* End of Modal User */}

          <StatusBar style="auto" />
        </ScrollView>

        {/* Button create Oink */}
        <TouchableOpacity onPress={() => setCreateTriggered((prev) => !prev)} className=' absolute bottom-14 right-7 flex justify-center items-center rounded-full bg-white border-light_green border-2 w-16 h-16'>
            {createTriggered === false ? 
              <Ionicons name="create" size={30} color="#3A4D39" />
              :
              <AntDesign name="close" size={30} color="#3A4D39" />
            }
        </TouchableOpacity>
        {/* End of Button create Oink */}
            
        {/* Button to choose create Post */}
        {createTriggered && 
        <View className="w-fit h-30 bg-white rounded-lg border-2 border-light_green absolute bottom-4 right-24" >
          <TouchableOpacity 
            className=" border-b-2 py-1 border-light_green w-full px-3"
            onPress={() => {
            setSelectPost("Oink");
            setCreateTriggered(false);}}>
            <Text className=" text-base font-semibold text-dark_green">Oink!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" border-b-2 py-1 border-light_green w-full px-3"
            onPress={() => {
            setSelectPost("Lost");
            setCreateTriggered(false);}}>
            <Text className=" text-base font-semibold text-dark_green">Lost</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" border-b-2 py-1 border-light_green w-full px-3"
            onPress={() => {
            setSelectPost("Found");
            setCreateTriggered(false);}}>
            <Text className=" text-base font-semibold text-dark_green">Found</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" w-full px-3 py-1"
            onPress={() => {
            setSelectPost("Parking"); 
            setCreateTriggered(false);}}>
            <Text className=" text-base font-semibold text-dark_green">Parking</Text>
          </TouchableOpacity>
        </View>
        }
        {/* End Choice View */}

      </SafeAreaView>
    </>
  );
}

import { View, Text, Modal, Image, TextInput } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import { useState } from "react";

const CreateOink = () => {
  const [oinkMessages, onChangeOinkMessages] = useState('');
  return (
    <>
        <View className=" rounded-2xl w-5/6 min-h-[30vh] bg-white absolute items-center top-32">
          {/* Header */}
          <View className=" flex flex-row rounded-t-2xl bg-yellow-100 w-full px-6 justify-between py-3 items-center ">
            <View className=" flex flex-row items-center">
              <Image source={require("../../../assets/Avatar2.webp")} className="w-8 h-8 border border-white rounded-full mr-1"></Image>
              <View>
                <Text className=" font-semibold text-sm">Username</Text>
                <Text className=" text-xs">Engineering</Text>
              </View>
            </View>
            <Text>Oink!</Text>
          </View>
          {/* End of Header */}

          {/* Body input */}
          <View className=" w-full h-fit px-6 py-2">
            <TextInput
              onChangeText={onChangeOinkMessages}
              value={oinkMessages}
              placeholder="Create an oink in here . . ."
              keyboardType="default"
              className=" text-base text-black"
            />
          </View>
          {/* End of Body input */}

          {/* Footer */}
          <View className=" bg-yellow-100 rounded-b-2xl w-full h-12 bottom-0">

          </View>
          {/* End of Footer */}
        </View>
    </>
  )
}

export default CreateOink
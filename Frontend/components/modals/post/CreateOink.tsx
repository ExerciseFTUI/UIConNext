import { View, Text, Modal, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


const CreateOink = ({mode}) => {
  const [oinkMessages, onChangeOinkMessages] = useState('');
  const [image, setImage] = useState();
  const [camera, setCamera] = useState("")

  const uploadImage = async (camera: string) => {
    try {
      let result;

      if (camera === "gallery") {
        await ImagePicker.requestCameraPermissionsAsync();

        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          // aspect: [4, 3],
          quality: 1,
        })
        
      } else{
        await ImagePicker.requestCameraPermissionsAsync();
  
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          quality: 1
        });
      }

      if (!result.canceled){
        await saveImage(result.assets[0].uri);
      }
      
    } catch (error) {
      alert("Error uploading image : " + error.message);
    }
  }

  const saveImage = async (image) => {
    try {
      setImage(image);
    } catch (error) {
      throw error;
    }
  }

  

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className=" rounded-2xl w-full h-fit bg-white items-center top-3">
          {/* Header */}
          <View className=" flex flex-row rounded-t-2xl bg-yellow-100 w-full px-6 justify-between py-3 items-center ">
            <View className=" flex flex-row items-center">
              <Image source={require("../../../assets/Avatar2.webp")} className="w-8 h-8 border border-white rounded-full mr-1"></Image>
              <View>
                <Text className=" font-semibold text-sm">Username</Text>
                <Text className=" text-xs">Engineering</Text>
              </View>
            </View>
            <Text className=" text-base font-semibold">{mode}</Text>
          </View>
          {/* End of Header */}

          {/* Body input */}
          <View className=" w-full h-80 px-6 py-2">
            <TextInput
              onChangeText={onChangeOinkMessages}
              value={oinkMessages}
              placeholder="Create an oink in here . . ."
              keyboardType="default"
              multiline={true}
              className=" text-base text-slate-900 w-full "
              />
          </View>
          {/* End of Body input */}

          {/* Footer */}
          <View className="  bg-yellow-100 rounded-b-2xl w-full h-12 justify-between items-center flex flex-row px-6">
            <View className=" flex flex-row">
              <TouchableOpacity onPress={() => uploadImage("gallery")} >
                <Entypo name="images" size={30} color="#3A4D39" />
              </TouchableOpacity>
              <TouchableOpacity className=" ml-3"  onPress={() => uploadImage("")}>
                <Entypo name="camera" size={30} color="#3A4D39" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <FontAwesome name="send" size={30} color="#3A4D39" />
            </TouchableOpacity>
          </View>
          {/* End of Footer */}
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default CreateOink
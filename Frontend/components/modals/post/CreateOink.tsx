import { View, Text, Modal, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


const CreateOink = ({mode}) => {
  const [oinkMessages, onChangeOinkMessages] = useState('');
  const [image, setImage] = useState([]);

  const uploadImage = async (camera: string) => {
    try {
      let result;

      if (camera === "gallery") {
        await ImagePicker.requestCameraPermissionsAsync();

        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          allowsMultipleSelection: true,
          quality: 1,
        })
        
      } else{
        await ImagePicker.requestCameraPermissionsAsync();
  
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          allowsMultipleSelection: true,
          quality: 1
        });
      }

      if (!result.canceled){
        const newImage = result.assets.map((asset) => asset.uri);
        setImage([...image, ...newImage]);
      }
      
    } catch (error) {
      alert("Error uploading image : " + error.message);
    }
  }

  const renderImages = () => {
  return image.map((uri, index) => (
    <Image
      key={index}
      source={{ uri: uri }}
      style={{ width: 80, height: 80, marginRight: 8, marginBottom: 8, borderRadius: 8 }}
    />
  ));
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
          <View className=" relative w-full h-80  my-3 ">
            <View className=" border-2 border-gray-200  rounded-2xl px-3 py-3 mx-3 w-fit h-52 mb-24 ">
              <TextInput
                onChangeText={onChangeOinkMessages}
                value={oinkMessages}
                placeholder="Create an oink in here . . ."
                keyboardType="default"
                multiline={true}
                className=" text-base text-slate-900 "
                />
            </View>

              {/* Display selected image */}
              {image && (
                <ScrollView horizontal={true}  className=" px-6 absolute flex flex-row overflow-hidden bottom-0  h-fit ">
                  {image.map((uri, index) => (
                  <Image
                    key={index}
                    source={{ uri: uri }}
                    className="w-24 h-24 border-black rounded-lg mr-1"
                  />
                ))}
                </ScrollView>
              )}
              {/* End of Display selected image */}

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

      {/* Button for clear all messages and images */}
      <TouchableOpacity onPress={()=> {onChangeOinkMessages(""), setImage([])}} className=" bg-red-300  mt-10 py-4 w-1/3 rounded-2xl flex flex-row justify-center">
        <Text className=" text-xl font-bold text-white">Clear All</Text>
      </TouchableOpacity>
      {/* End of Button for clear all messages and images */}
    </>
  )
}

export default CreateOink
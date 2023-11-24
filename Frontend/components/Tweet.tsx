import { Text, View, Image } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Tweet(){
  const [datas, setDatas] = useState([])
  
  const getPost = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data)
      setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])


    return(
      <>
        {datas.map((data, index) => (
          <View key={data.id} className="mb-3 mt-1" >
            <View className="items-center">
              {/* Tweets */}
              <View className="w-full h-auto border-light_green border rounded-md">

                {/* Header Tweet */}
                <View className="w-full px-3 py-1 bg-dark_green h-auto flex flex-row justify-between items-center">
                  <View className="flex flex-row">
                    <Image source={require("../assets/Avatar2.webp")} className="w-8 h-8 border border-white rounded-full"></Image>
                    <View className="pl-2">
                      <Text className="text-white text-sm font-normal">{data.userId}</Text>
                      <Text className="text-white text-xs font-light">{data.id}</Text>
                    </View>
                  </View>
                  <Text className="text-white font-medium">Oink!</Text>
                </View>
                {/* End of Header Tweet */}

                {/* Massage Tweet */}
                <Text className="text-dark_green px-3 py-2 font-medium text-sm">
                  {data.body}
                </Text>
                {/* End of Massage Tweet */}

                {/* Footer */}
                <View className="px-3 py-2 justify-around flex flex-row">
                  <AntDesign name="message1" size={18} color="#3A4D39" />
                  <FontAwesome5 name="door-open" size={18} color="#3A4D39" />
                  <AntDesign name="heart" size={18} color="#3A4D39" />
                  <Entypo name="dots-three-horizontal" size={18} color="#3A4D39" />
                </View>
                {/* Footer */}
              </View>
              {/* End of Tweets */}
            </View>
          </View>
        ))}
      </>
  );
}

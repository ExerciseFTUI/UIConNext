import { View, Text, Modal, Image } from 'react-native'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

type Props = {
    status: boolean,
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Profile({status, setStatus} : Props) {
    return(
        <View>
            <Modal 
            visible={status} 
            onRequestClose={()=>setStatus(false)}
            animationType='slide'
            presentationStyle='pageSheet'>
            <View className="flex-1 bg-light_green ">
                {/* Header for close button */}
                <View className=" items-end pr-4 pt-4">
                <AntDesign name="closecircleo" size={24} color="white" onPress={() => setStatus(false)} />
                </View>
                {/* End of Header for close button */}

                {/* Avatar */}
                <View className="items-center mt-36">
                    // @ts-ignore
                    <Image source={require("../assets/Avatar2.webp")} className=" w-80 h-80" />
                <View className="border border-white w-full"></View>
                </View>
                {/* End of Avatar */}

                {/* Body of user information */}
                <View className="items-center pt-10">
                    <Text className="text-white text-xl font-semibold">Luthfi Misbachul Munir</Text>
                    <Text className="text-white text-xl font-semibold">2106631961</Text>
                    <Text className="text-white text-xl font-semibold">Teknik Komputer</Text>
                </View>
                {/* Body of user information */}

            </View>
            </Modal>
        </View>
    )
}

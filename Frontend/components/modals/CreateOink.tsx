import React from 'react'
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

type Props = {
    selectPost: string;
    setSelectPost: React.Dispatch<React.SetStateAction<string>>;
};

export default function CreateOink({ selectPost, setSelectPost }: Props) {
    return (
        <>
        <Modal
        visible={selectPost === "Oink"}
        onRequestClose={() => setSelectPost("null")}
        className=' absolute w-full h-screen bg-primary'
        >
            <View className=' w-full h-screen bg-primary'>
                <TouchableOpacity onPress={() => setSelectPost("null")}></TouchableOpacity>
                <View>
                    <Text>CreateOink</Text>
                </View>
            </View>
        </Modal>

        </>
    )
}

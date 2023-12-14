import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CreateOink from "../../../../components/modals/post/CreateOink";
import ReplyPost from "../../../../components/ReplyPost";
import tweets from "../../../../constants/tweets";
import Post from "../../../../components/Post";

const AddPost = () => {
  const [mode, setMode] = useState("Oink");

  return (
    <>
      <View className=" m-5 items-center ">
        {/* Button for choose mode post */}
        <View className=" flex w-full flex-row  items-center justify-evenly grid-cols-4">
          <TouchableOpacity onPress={() => setMode("Oink")} className={ `${mode === "Oink" ? "bg-green-800" : "bg-slate-300"} py-2 px-5 rounded-lg`}>
            <Text className="text-white font-semibold">Oink!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMode("Lost")} className={ `${mode === "Lost" ? "bg-green-800" : "bg-slate-300"} py-2 px-5 rounded-lg`}>
            <Text className="text-white font-semibold">Lost</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMode("Found")} className={ `${mode === "Found" ? "bg-green-800" : "bg-slate-300"} py-2 px-5 rounded-lg`}>
            <Text className="text-white font-semibold">Found</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMode("Parking")} className={ `${mode === "Parking" ? "bg-green-800" : "bg-slate-300"} py-2 px-5 rounded-lg`}>
            <Text className="text-white font-semibold">Parking</Text>
          </TouchableOpacity>
        </View>
        {/* End of Button for choose mode post */}
        <CreateOink mode={mode}/>

      {/* <View className=" flex bg-white w-full">
        <FlatList
          data={tweets}
          renderItem={({ item }) => <ReplyPost tweet={item} />}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          />
        </View> */}
      </View>
    </>
  );
};

export default AddPost;

const styles = StyleSheet.create({});

import { StyleSheet, View, FlatList, Pressable, Text, Image } from "react-native";
import tweets from "../../../../constants/tweets";
import Post from "../../../../components/Post";

export default function Main() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Post tweet={item} />}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",

    borderRadius: 25,
    padding: 15,

    position: "absolute",
    right: 15,
    bottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    overflow: "hidden",
  },
});
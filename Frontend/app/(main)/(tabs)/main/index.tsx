import { StyleSheet, View, FlatList, Pressable, Text, Image, ActivityIndicator } from "react-native";
import tweets from "../../../../constants/tweets";
import Post from "../../../../components/Post";
import useTweet from "../../../../hooks/useTweet";
import useAddTweet from "../../../../hooks/useAddTweet";
import { uri } from "../../../../constants/api";
import COLORS from "../../../../constants/colors";
import { SIZES } from "../../../../constants/sizes";
import Welcome from "../../../../components/main/Welcome";

export default function Main() {
  const {
    data: posts,
    refetch: refreshUsers,
    isSuccess: isTweetSuccess,
    isError: isTweetError,
    error: tweetError,
    isPending: isTweetPending,
  } = useTweet();

  const { mutate, isSuccess, isError, isPending, error } = useAddTweet();

  // if (isPending) {
  //   console.log("pending...");
  // }

  // if (isSuccess) {
  //   console.log("success");
  //   console.log(uri);
  // }

  if (isTweetSuccess) {
    console.log("Succesfully fetched tweet");
  }

  if (isTweetError) {
    console.log(tweetError);
  }

  // if (isError) {
  //   console.log(error.message);
  // }

  return (
    <View style={styles.page}>
      {/* <TouchableOpacity onPress={() => mutate("Hello")}>
        <Text>Mutate</Text>
      </TouchableOpacity> */}
      <Welcome />

      {isTweetPending && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}

      {isTweetError && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: SIZES.medium }}>Something Went Wrong</Text>
        </View>
      )}

      {tweets && (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post tweet={item} />}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        />
      )}
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

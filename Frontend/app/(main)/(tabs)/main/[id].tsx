import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Text,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import tweets from "../../../../constants/tweets";
import tweetOnce from "../../../../constants/tweetOnce";
import ReplyPost from "../../../../components/ReplyPost";
import { useEffect, useState } from "react";
import IconButton from "../../../../components/IconButton";
import { useGlobalSearchParams } from "expo-router";

export default function Main() {
  const { id } = useGlobalSearchParams();
  // console.log(id);
  const tweetPress = tweets.find((t) => t.id === id);

  if (!tweetPress) console.log("Ga nemu bang");
  // else console.log(tweetPress);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={css.page}>
      {/* Original tweet */}
      {/* <View style={css.container} className=" border border-black">
        <Image source={{ uri: tweetPress.user.image }} style={css.userImage} />

        <View style={css.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={css.name}>{tweetPress.user.name}</Text>
            <Text style={css.username}>{tweetPress.user.username} · 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>

          <Text style={css.content}>{tweetPress.content}</Text>

          {tweetPress.image && (
            <Image source={{ uri: tweetPress.image }} style={css.image} />
          )}

          <View style={css.footer}>
            <IconButton icon="comment" text={tweetPress.numberOfComments} />
            <IconButton icon="retweet" text={tweetPress.numberOfRetweets} />
            <IconButton icon="heart" text={tweetPress.numberOfLikes} />
            <IconButton icon="chart" text={tweetPress.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </View> */}
      {/* Original tweet */}

      {/* Tweet replies */}
      {/* <FlatList
        data={tweets}
        renderItem={({ item }) => <ReplyPost tweet={item} />}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      /> */}
      {/* End of Tweet replies */}
    </View>
  );
}

const css = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },

  // footer
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

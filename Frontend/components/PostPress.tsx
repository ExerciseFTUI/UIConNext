import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const PostPress = ({ tweet }: TweetProps) => {
  return (
      <Pressable style={css.container} className=" border-4">
        <Image source={{ uri: tweet.user.image }} style={css.userImage} />

        <View style={css.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={css.name}>{tweet.user.name}</Text>
            <Text style={css.username}>{tweet.user.username} · 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>

          <Text style={css.content}>{tweet.content}</Text>

          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={css.image} />
          )}

          <View style={css.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
  );
};

const css = StyleSheet.create({
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

export default PostPress;

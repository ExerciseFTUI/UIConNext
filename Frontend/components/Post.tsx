import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";
import { useState } from "react";

type TweetProps = {
  tweet: TweetType;
};

const Post = ({ tweet }: TweetProps) => {
  const [settingButton, setSettingButton] = useState(false);

  return (
    <Link href={`/main/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username} · 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
              onPress={() => setSettingButton((prev) => prev = !prev)}
            />
            {/* Button setting */}
            {settingButton && (
              <View style={styles.settingContainer}>
                <TouchableOpacity style={styles.settingOption}>
                  <Text style={styles.settingText}>Copy Link</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingOption, { backgroundColor: "red" }]}>
                  <Text style={styles.settingText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            {/* End of Button setting */}
          </View>

          <Text style={styles.content}>{tweet.content}</Text>

          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image} />
          )}

          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};


const styles = StyleSheet.create({
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
  settingContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
  },
  settingOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  settingText: {
    color: "white",
  },
});

export default Post;

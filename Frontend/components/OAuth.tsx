import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, TouchableOpacity, Image, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
import COLORS from "../constants/colors";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    // <Button title="Sign in with Google" color={"#000"} onPress={onPress} />
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10,
      }}
    >
      <Image
        source={require("../assets/google.png")}
        style={{
          height: 36,
          width: 36,
          marginRight: 8,
        }}
        resizeMode="contain"
      />

      <Text>Google</Text>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;

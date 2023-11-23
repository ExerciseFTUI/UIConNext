import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import OTPTextInput from "react-native-otp-textinput";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import COLORS from "../../constants/colors";
import Button from "../../components/Button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const { width, height } = Dimensions.get("window");

const Otp = () => {
  const { emailAddress } = useLocalSearchParams();

  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  // Verify the email address
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.lottie}>
        <Lottie source={require("../../assets/otp3.json")} autoPlay loop />
      </View>

      <View
        style={{
          flex: 1,
          gap: 3,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 22,
          paddingVertical: 10,
          marginTop: -20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Enter OTP?
        </Text>
        <Text style={{ fontWeight: "500" }}>
          An 6 digit code has been sent to
        </Text>
        <Text style={{ fontWeight: "400" }}>
          {emailAddress || "raditya.ihsan@ui.ac.id"}
        </Text>
        <View>
          <OTPTextInput
            inputCount={3}
            tintColor={COLORS.primary}
            offTintColor={COLORS.grey}
            inputCellLength={2}
            handleTextChange={(e) => setCode(e)}
          />
        </View>

        <Button
          filled={true}
          title="Verify"
          style={{ marginTop: 30 }}
          onPress={onPressVerify}
          isLoading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
    alignSelf: "center",
  },
});

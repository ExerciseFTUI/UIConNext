import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();

  const handleDone = () => {
    router.push("/signup");
    // setItem("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text className="font-semibold text-white">Get Started</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../assets/animations/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Welcome to UIConNext",
            // (
            //   <View style={{}}>
            //     <Text
            //       style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
            //     >
            //       Welcome To UIConNext
            //     </Text>
            //   </View>
            // ),
            subtitle:
              "UIConNext is a platform that helps you to connect with your colleagues and work seamlessly",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../assets/animations/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: COLORS.primary,

            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../assets/animations/achieve.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle: "Get your work done seamlessly without interruption",
            // (
            //   <View
            //     style={{
            //       width: width * 0.9,
            //     }}
            //   >
            //     <Text
            //       style={{
            //         fontSize: 15,
            //         textAlign: "center",
            //         color: "white",
            //       }}
            //     >
            //       Get your work done seamlessly without interruption
            //     </Text>
            //     <View style={{ marginTop: 50 }}>
            //       <Button title="Login" onPress={() => router.push("/Login")} />
            //     </View>
            //   </View>
            // ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "",

    // borderTopLeftRadius: 100,
    // borderBottomLeftRadius: 100,
  },
});

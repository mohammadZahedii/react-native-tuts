import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";

import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { colors } from "./utils";
const GuessNumberGame = () => {
  const [pickScreenNumber, setPickScreenNumber] = useState("");

  let screen = (
    <StartGameScreen
      handlePickScreenNumber={(step) => setPickScreenNumber(step)}
    />
  );

  if (pickScreenNumber) {
    screen = (
      <GameScreen
        userNumber={pickScreenNumber}
        handleBack={() => setPickScreenNumber(null)}
      />
    );
  }
  return (
    // <View style={styles.appContainer}>
    //   <StartGameScreen />
    // </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        style={styles.appContainer}
        colors={[colors.primary700, colors.accent500]}
      >
        <ImageBackground
          style={styles.appContainer}
          source={require("./../../assets/dices-background.jpg")}
          resizeMode="cover"
          imageStyle={styles.backgroundImageStyle}
        >
          <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default GuessNumberGame;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});

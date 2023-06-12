import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { colors } from "./utils";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
const GuessNumberGame = () => {
  const [pickScreenNumber, setPickScreenNumber] = useState("");
  const [isGameOver, setIsGameover] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <Text>loading...</Text>;
  const handleRestartGame = () => {
    setPickScreenNumber(null);
    setGuessCount(0);
  };
  let screen = (
    <StartGameScreen
      handlePickScreenNumber={(step) => {
        setPickScreenNumber(step);
        setIsGameover(false);
      }}
    />
  );

  if (pickScreenNumber) {
    screen = (
      <GameScreen
        userNumber={pickScreenNumber}
        onGameOver={(val) => {
          setIsGameover(true);
          setGuessCount(val);
        }}
        handleBack={() => {
          setPickScreenNumber(null);
          setGuessCount(0);
        }}
      />
    );
  }
  if (isGameOver && pickScreenNumber) {
    screen = (
      <GameOverScreen
        handleRestart={handleRestartGame}
        guessNumber={pickScreenNumber}
        roundsNumber={guessCount}
      />
    );
  }
  return (
    // <View style={styles.appContainer}>
    //   <StartGameScreen />
    // </View>

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
        <SafeAreaView style={styles.appContainer}>
          {/* <RenderContent /> */}
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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

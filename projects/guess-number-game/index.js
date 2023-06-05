import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

const GuessNumberGame = () => {
  return (
    // <View style={styles.appContainer}>
    //   <StartGameScreen />
    // </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        style={styles.appContainer}
        colors={["#4e0329", "#ddb52f"]}
      >
        <ImageBackground
          style={styles.appContainer}
          source={require("./../../assets/dices-background.jpg")}
          resizeMode="cover"
          imageStyle={styles.backgroundImageStyle}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default GuessNumberGame;

const styles = StyleSheet.create({
  appContainer: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});

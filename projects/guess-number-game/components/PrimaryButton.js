import { Text, View, Pressable, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../utils";

const PrimaryButton = ({ children, handlePress }) => {
  const handlePressedOnButton = () => {
    handlePress();
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handlePressedOnButton}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#620432" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.primary500,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default PrimaryButton;

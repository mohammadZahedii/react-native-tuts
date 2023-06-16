import { Platform, Text, StyleSheet, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  const { width, height } = useWindowDimensions();

  //set specific padding
  let desiredWidth;

  if (width > 500) {
    desiredWidth = 700;
  } else {
    desiredWidth = 300;
  }

  return (
    <Text style={[styles.title, { width: desiredWidth }]}>{children}</Text>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    width: 300,
    maxWidth: "80%",
  },
});

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;

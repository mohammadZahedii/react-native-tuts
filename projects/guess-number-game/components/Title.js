import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../utils";

const Title = ({ children }) => {
  return <Text style={styles.tile}>{children}</Text>;
};

const styles = StyleSheet.create({
  tile: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;

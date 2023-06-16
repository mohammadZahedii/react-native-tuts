import { Text, StyleSheet } from "react-native";
import { colors } from "../../utils";
import PropTypes from "prop-types";

const NumberContainer = ({ children }) => {
  return <Text style={styles.number}>{children}</Text>;
};

const styles = StyleSheet.create({
  number: {
    fontSize: 36,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: colors.accent500,
    color: colors.accent500,
    padding: 24,
    borderRadius: 8,
    // width: "",
    width: "100%",
    maxWidth: 120,
  },
});

NumberContainer.propTypes = {
  children: PropTypes.string.isRequired,
};
export default NumberContainer;

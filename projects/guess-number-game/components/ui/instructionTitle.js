import { Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

const InstructionTitle = ({ children, style }) => {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    fontFamily: "open-sans",
    color: colors.accent500,
  },
});

export default InstructionTitle;

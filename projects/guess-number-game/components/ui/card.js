import { View, StyleSheet } from "react-native";
import { colors } from "../../utils";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.primary800,
    gap: 20,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
export default Card;

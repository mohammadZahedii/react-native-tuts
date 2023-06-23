import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const List = ({ data }) => {
  return data.map((item) => {
    return (
      <View key={item} style={styles.listItem}>
        <Text style={styles.textItem}>{item}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#d3a185",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    textAlign: "center",
  },
  textItem: {
    textAlign: "center",
    color: "#351401",
  },
});

List.prototype = {
  data: PropTypes.array.isRequired,
};
export default List;

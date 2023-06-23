import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.toggleDrawer()}>
      <Ionicons
        name="menu"
        style={{ marginHorizontal: 12 }}
        size={30}
        color={"white"}
      />
    </Pressable>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});

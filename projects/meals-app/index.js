import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
          height: 100,
          shadowColor: "transparent",
        },
        headerTitleStyle: { fontSize: 24 },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveBackgroundColor: "#e5c6b4",
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MealsApp = (props) => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* first screen that we have nested route */}
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          {/* first screen that we have nested route */}
          <Stack.Screen
            name="MealsItems"
            component={MealsScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "About" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MealsApp;

const styles = StyleSheet.create({
  rootContainer: {},
});

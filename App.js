import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            // tabBarActiveBackgroundColor: "#f0e1ff",
            tabBarActiveTintColor: "#3c0a6b",
            // drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarLabel: "Welcome Screen",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: "#351401" },
//             headerTintColor: "white",
//             contentStyle: { backgroundColor: "#3f2f25" },
//           }}
//         >
//           <Stack.Screen
//             name="MealsCategories"
//             component={CategoriesScreen}
//             options={{
//               title: "All Categories",
//             }}
//           />
//           <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
//           <Stack.Screen name="MealDetail" component={MealDetailScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},
// });

const styles = StyleSheet.create({
  container: {},
});

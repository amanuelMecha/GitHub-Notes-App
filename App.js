import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//imported files
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";
import BrowserView from "./components/WebView";
import Notes from "./components/Notes";

const Stack = createStackNavigator();

function GitHub() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        // options={{ title: "searchhhhhhh" }}
      />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="profileDetails" component={ProfileDetails} />
      <Stack.Screen name="repositories" component={Repositories} />
      <Stack.Screen name="browserView" component={BrowserView} />
      <Stack.Screen name="notes" component={Notes} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <GitHub />
    </NavigationContainer>
  );
}

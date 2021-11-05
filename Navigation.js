import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import MeetingRoom from "./screens/meetingRoom";

function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          options={{ headerShown:false }}
          component={Home}
        ></Stack.Screen>
        <Stack.Screen options={{
          title:'Start a meeting',
          headerStyle:{
            backgroundColor:'#1c1c1c',
            shadowOpacity:0,
          },
          headerTintColor:'white'
        }} name="Room" component={MeetingRoom}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

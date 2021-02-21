import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();
import Home from '../screens/Home';
import Settings from '../screens/Settings';

import { createStackNavigator } from '@react-navigation/stack';

function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Swaps" component={() => <Text>swaps</Text>} />
      <Tab.Screen name="Create" component={Settings} />
      {/*<Tab.Screen name="Clubs" component={Settings} />*/}
      {/*<Tab.Screen name="Chat" component={Settings} />*/}
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();



function AuthNavigator(){
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
      <Stack.Screen name="login" component={Home} />
      <Stack.Screen name="register" component={BottomNavigation} />
    </Stack.Navigator>
  )
}

export default function RootNavigator(){
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="root" component={BottomNavigation} />
      <Stack.Screen name="auth" component={AuthNavigator} />
    </Stack.Navigator>
  )
}

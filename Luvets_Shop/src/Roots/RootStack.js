import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {GetStarted, Loading, SignIn, SplashScreen} from '../Pages';
import MainTab from './TabNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default RootStack;

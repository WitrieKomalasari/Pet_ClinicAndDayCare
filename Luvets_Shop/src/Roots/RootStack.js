import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      {/*
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
  */}
    </Stack.Navigator>
  );
};

export default RootStack;

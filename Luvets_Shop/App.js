import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './src/Roots/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

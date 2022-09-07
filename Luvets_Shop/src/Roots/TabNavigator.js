import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Home} from '../Pages';

const TabNav = createMaterialBottomTabNavigator();

const MainTab = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} />
    </TabNav.Navigator>
  );
};

export default MainTab;

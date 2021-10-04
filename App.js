import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsFeed from './src/screens/NewsFeed';
import InfiniteScrollableList from './src/screens/InfiniteScrollableList';
import Timer from './src/screens/Timer';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="infinite scrollable List"
          component={InfiniteScrollableList}
        />
        <Tab.Screen name="News feed" component={NewsFeed} />
        <Tab.Screen name="Timer" component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

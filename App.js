import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store';

import PhotoListScreen from './components/PhotoListScreen/PhotoListScreen';
import FullPhotoScreen from './components/FullPhotoScreen/FullPhotoScreen';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={PhotoListScreen}
          options={{ headerTitle: 'Unsplash photos' }}
        />
        <Stack.Screen
          name="FullPhotoScreen"
          component={FullPhotoScreen}
          options={{ headerTitle: 'Full Photo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

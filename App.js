import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';
import Screen_01 from './components/screen_01';
import Screen_02 from './components/screen_02';
import Screen_03 from './components/screen_03';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen_01">
          <Stack.Screen name="Screen_01" component={Screen_01} options={{ headerShown: false }} />
          <Stack.Screen name="Screen_02" component={Screen_02} options={{ headerShown: false }} />
          <Stack.Screen name="Screen_03" component={Screen_03} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

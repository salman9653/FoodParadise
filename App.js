import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { store } from './store'
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import Basket from './screens/Basket';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
          />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrder}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={Delivery}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

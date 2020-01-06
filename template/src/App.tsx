import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import { createStoreProvider } from './store';
import 'react-native-gesture-handler';

import Login from './screens/Login';
import HomeScreen from './screens/Home';

declare var global: { HermesInternal: null | {} };

enableScreens();

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const StoreProvider = createStoreProvider();

const App: React.FC<{}> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StoreProvider>
        <AppContainer />
      </StoreProvider>
    </>
  );
};

export default App;

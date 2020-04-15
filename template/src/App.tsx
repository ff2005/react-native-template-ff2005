import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createStoreProvider } from '/store';
import AppNavigation from '/routes';
import 'react-native-gesture-handler';

declare var global: { HermesInternal: null | {} };

enableScreens();

const StoreProvider = createStoreProvider();

const App: React.FC<{}> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StoreProvider>
        <AppNavigation />
      </StoreProvider>
    </>
  );
};

export default App;

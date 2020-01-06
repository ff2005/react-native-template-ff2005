import React, { useCallback } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { useNavigation } from '../hooks';

const LoginScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
  const gotoHome = useCallback(() => {
    const home = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    navigation.dispatch(home);
  }, [navigation]);

  console.log('LoginScreen', { navigation });
  return (
    <View style={styles.main}>
      <Text>Login Screen</Text>
      <Button title="Sign-in" onPress={gotoHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;

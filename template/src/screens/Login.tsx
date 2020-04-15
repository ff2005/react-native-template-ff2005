import React, { useCallback } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
  const gotoHome = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }),
    );
  }, [navigation]);

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

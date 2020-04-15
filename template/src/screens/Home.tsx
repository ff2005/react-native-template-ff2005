import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from '/store';
import { increment, decrement } from '/store/counter/actions';

const HomeScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
  const counter = useSelector((state) => state.somethingToCount.counter);
  const dispatch = useDispatch();
  const plusOne = useCallback(() => dispatch(increment(1)), [dispatch]);
  const minusOne = useCallback(() => dispatch(decrement(1)), [dispatch]);
  const gotoLogin = useCallback(() => navigation.navigate('Login'), [
    navigation,
  ]);

  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
      <Text>{counter}</Text>
      <Button title="Increment" onPress={plusOne} />
      <Button title="Decrement" onPress={minusOne} />
      <Button title="Login" onPress={gotoLogin} />
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

export default HomeScreen;

import React from 'react';
import {CustomButton} from '../components/Button';
import {CounterText} from '../components/CounterText';
import {StyleSheet} from 'react-native';

export const MainScreen = () => {
  const handleIncrement = () => {};
  const handleDecrement = () => {};

  return (
    <>
      <CounterText value={0} />
      <CustomButton
        title={'Increment'}
        onPress={handleIncrement}
        style={styles.incrementButton}
      />
      <CustomButton title={'Decrement'} onPress={handleDecrement} />
    </>
  );
};

const styles = StyleSheet.create({
  incrementButton: {
    marginBottom: 8,
  },
});

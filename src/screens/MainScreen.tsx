import React from 'react';
import {CustomButton} from '../components/Button';
import {CounterText} from '../components/CounterText';
import {StyleSheet} from 'react-native';
import {useAppSelector} from '../store/hooks/useAppSelector';
import {useAppDispatch} from '../store/hooks/useAppDispatch';
import {counterActions} from '../store/slices/counter';

export const MainScreen = () => {
  const counter = useAppSelector(store => store.counter.value);
  const dispatch = useAppDispatch();

  const canIncrement = counter < 100;
  const canDecrement = counter > 0;

  const handleIncrement = () => {
    dispatch(counterActions.INCREMENT());
  };
  const handleDecrement = () => {
    dispatch(counterActions.DECREMENT());
  };

  return (
    <>
      <CounterText value={counter} />
      <CustomButton
        disabled={!canIncrement}
        title={'Increment'}
        onPress={handleIncrement}
        style={styles.incrementButton}
      />
      <CustomButton
        disabled={!canDecrement}
        title={'Decrement'}
        onPress={handleDecrement}
      />
    </>
  );
};

const styles = StyleSheet.create({
  incrementButton: {
    marginBottom: 8,
  },
});

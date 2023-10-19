import React, {useCallback} from 'react';
import {CustomButton} from '../components/CustomButton';
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

  const handleIncrement = useCallback(() => {
    dispatch(counterActions.INCREMENT());
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch(counterActions.DECREMENT());
  }, []);

  return (
    <>
      <CounterText value={counter} />
      <CustomButton
        autoClick
        disabled={!canIncrement}
        title={'Increment'}
        onPress={handleIncrement}
        style={styles.incrementButton}
      />
      <CustomButton
        autoClick
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

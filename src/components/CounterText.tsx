import React from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  value: string | number;
};

export const CounterText = (props: Props) => {
  return <Text style={styles.text}>{props.value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 64,
  },
});

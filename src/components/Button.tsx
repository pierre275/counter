import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const CustomButton = (props: Props) => {
  const buttonStyles = props.disabled ? styles.disabledButton : styles.button;
  const textStyles = props.disabled ? styles.disabledText : styles.text;

  return (
    <TouchableOpacity
      style={[buttonStyles, props.style]}
      onPress={!props.disabled ? props.onPress : undefined}
      disabled={props.disabled}>
      <Text style={textStyles}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    marginHorizontal: 4,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#bdc3c7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledText: {
    color: '#95a5a6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React, {useEffect, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Subject, switchMap, take, timer} from 'rxjs';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  autoClick?: boolean;
  style?: StyleProp<ViewStyle>;
};

const buttonConfig = {
  longTapMs: 500,
  autoClickMs: 100,
};

export const CustomButton = (props: Props) => {
  const buttonStyles = props.disabled ? styles.disabledButton : styles.button;
  const textStyles = props.disabled ? styles.disabledText : styles.text;
  const press$ = useMemo(() => new Subject<'IN' | 'OUT'>(), []);

  const touchableOpacityProps = props.autoClick
    ? {
        onPressIn: () => press$.next('IN'),
        onPressOut: () => press$.next('OUT'),
      }
    : {
        onPress: props.onPress,
      };

  useEffect(() => {
    const sub = press$
      .pipe(
        switchMap(action =>
          action === 'IN'
            ? timer(buttonConfig.longTapMs, buttonConfig.autoClickMs)
            : timer(0).pipe(take(1)),
        ),
      )
      .subscribe(() => {
        props.onPress();
      });

    return () => sub.unsubscribe();
  }, [press$, props.onPress]);

  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      style={[buttonStyles, props.style]}
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

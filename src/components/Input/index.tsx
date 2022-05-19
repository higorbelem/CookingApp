/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {MotiView, useAnimationState} from 'moti';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import validations from '../../helper/validations';
import * as S from './styles';
import defaultTheme from '../../assets/theme';

type validationType = {
  type: keyof typeof validations;
  message: string;
};

type Props = {
  onChange?: (text: string, hasError: boolean) => void;
  placeholder?: string;
  style?: any;
  validation?: validationType[];
  isNumeric?: boolean;
  multiline?: boolean;
  maxLength?: number;
  zIndex?: number;
  value?: string;
};

const Input = ({
  placeholder,
  onChange,
  validation,
  style,
  isNumeric,
  maxLength,
  zIndex,
  value,
  multiline,
  ...rest
}: Props) => {
  const [validationMessage, setValidationMessage] = useState('');
  const [state, setState] = useState<number>(1);
  const [text, setText] = useState<{value: string; error: boolean}>({
    value: '',
    error: false,
  });

  const colorTransition = useSharedValue(1);

  const containerRef = useRef<any>();

  useEffect(() => {
    if (text && onChange) {
      onChange(text.error ? '' : text.value, text.error);
    }
  }, [text]);

  useEffect(() => {
    if (value && value !== text.value) {
      setText(st => ({
        ...st,
        value,
      }));
      colorTransition.value = withTiming(2, {duration: 300});
      setState(2);
      placeholderAnimState.transitionTo('end');
    }
  }, [value]);

  const borderAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        colorTransition.value,
        [0, 1, 2],
        [
          defaultTheme.colors.error,
          defaultTheme.colors.gray,
          defaultTheme.colors.secondary,
        ],
      ),
    };
  });
  const placeholderAnimState = useAnimationState({
    from: {
      translateY: 0,
      translateX: 0,
      transform: [{scale: 1}],
    },
    end: {
      translateY: -24,
      translateX: -15,
      transform: [{scale: 0.85}],
    },
  });
  const errorTextAnimState = useAnimationState({
    from: {
      height: 0,
    },
    end: {
      height: 30,
    },
  });

  const onInputFocus = () => {
    colorTransition.value = withTiming(2, {duration: 300});
    setState(2);
    placeholderAnimState.transitionTo('end');
  };

  const onInputBlur = () => {
    if (!text.value) {
      colorTransition.value = withTiming(1, {duration: 300});
      setState(1);
      placeholderAnimState.transitionTo('from');
    }
  };

  const validate = (t: string) => {
    if (!validation) {
      return true;
    }
    for (let index = 0; index < validation.length; index++) {
      if (!validations[validation[index].type](t)) {
        setValidationMessage(validation[index].message);
        return false;
      }
    }

    return true;
  };

  const onTextChange = (t: string) => {
    if (validation) {
      const hasError = !validate(t);
      if (!hasError) {
        colorTransition.value = withTiming(2, {duration: 300});
        setState(2);
        errorTextAnimState.transitionTo('from');
      } else {
        colorTransition.value = withTiming(0, {duration: 300});
        setState(0);
        errorTextAnimState.transitionTo('end');
      }

      setText({
        value: t,
        error: hasError,
      });
    } else {
      setText({
        value: t,
        error: false,
      });
    }
  };

  return (
    <S.Wrapper style={[style, {zIndex}]}>
      <S.Container
        multiline={multiline}
        ref={containerRef}
        style={borderAnimatedStyle}
        {...rest}>
        <S.Input
          value={text.value}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChangeText={onTextChange}
          keyboardType={isNumeric ? 'numeric' : 'default'}
          maxLength={maxLength}
          multiline={multiline}
        />

        {!!placeholder && (
          <S.PlaceholderMoti
            state={placeholderAnimState}
            transition={{
              type: 'timing',
              duration: 200,
            }}
            pointerEvents="none">
            <S.Placeholder state={state}>{placeholder}</S.Placeholder>
          </S.PlaceholderMoti>
        )}
      </S.Container>

      <MotiView
        state={errorTextAnimState}
        transition={{
          type: 'timing',
          duration: 400,
        }}>
        <S.Error>
          {!validationMessage ? 'Erro na validação' : validationMessage}
        </S.Error>
      </MotiView>
    </S.Wrapper>
  );
};

export default Input;

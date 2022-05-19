/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions} from '@react-navigation/native';
import {MotiView, useAnimationState} from 'moti';
import React, {FC, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';

import types from '../../store/module/types';
import * as S from './styles';

const {width} = Dimensions.get('window');

type Props = {
  navigation: any;
};

const Onboarding: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const animationState = useAnimationState({
    from: {
      marginBottom: -200,
      rotateZ: '90deg',
    },
    to: {
      marginBottom: 0,
      rotateZ: '0deg',
    },
  });

  useEffect(() => {
    setTimeout(() => {
      animationState.transitionTo('to');
    }, 500);
  }, []);
  // }, [onboardingDone]);

  const onPress = () => {
    dispatch({
      type: types.app.DONE_ONBOARDING,
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Main'}],
      }),
    );
  };

  return (
    <>
      <S.BackgroundCircle />
      <S.BackgroundCircle scale={0.9} yOffset={70} />
      <S.BackgroundCircle scale={0.7} yOffset={30} />

      <S.Safe>
        <S.Container>
          <S.Title>Hello,</S.Title>

          <S.OnboardingIcon width={width * 0.7} height={width * 0.7} />

          <S.Title>Welcome!</S.Title>
          <S.Subtitle>Let’s get cooking !</S.Subtitle>

          <MotiView
            state={animationState}
            transition={{
              type: 'spring',
            }}>
            <S.Button onPress={onPress}>
              <S.ArrowRightIcon width={15} height={15} />
            </S.Button>
          </MotiView>
        </S.Container>
      </S.Safe>
    </>
  );
};

export default Onboarding;

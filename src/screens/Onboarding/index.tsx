import React from 'react';
import {Dimensions} from 'react-native';

import * as S from './styles';

const {width} = Dimensions.get('window');

const Onboarding = () => {
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

          <S.Button>
            <S.ArrowRightIcon width={15} height={15} />
          </S.Button>
        </S.Container>
      </S.Safe>
    </>
  );
};

export default Onboarding;

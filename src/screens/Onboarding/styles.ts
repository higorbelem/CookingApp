import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Text from '../../components/Text';
import Onboarding from '../../assets/svgs/onboarding.svg';
import ArrowRight from '../../assets/svgs/arrow_right.svg';

const {width} = Dimensions.get('window');

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const OnboardingIcon = styled(Onboarding)`
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
`;

export const Subtitle = styled(Text)`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const ArrowRightIcon = styled(ArrowRight)``;

export const BackgroundCircle = styled.View<{scale?: number; yOffset?: number}>`
  position: absolute;
  bottom: ${({scale}) => -(width * (scale || 1)) / 2}px;
  width: ${({scale}) => width * (scale || 1)}px;
  height: ${({scale}) => width * (scale || 1)}px;
  ${({yOffset}) =>
    yOffset
      ? yOffset > 0
        ? `margin-left: ${Math.abs(yOffset)}px`
        : `margin-right: ${Math.abs(yOffset)}px`
      : ''};
  border-radius: ${width * 0.45}px;
  background-color: ${({theme}) => theme.colors.secondary}27;
`;

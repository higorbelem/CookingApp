import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../components/Text';
import TrayArrow from '../../assets/svgs/tray_arrow.svg';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const {width} = Dimensions.get('window');

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundCircle = styled.View<{
  scale?: number;
  yOffset?: number;
  xOffset?: number;
}>`
  position: absolute;
  top: ${({scale}) => -(width * (scale || 1)) / 2}px;
  width: ${({scale}) => width * (scale || 1)}px;
  height: ${({scale}) => width * (scale || 1)}px;
  ${({yOffset}) =>
    yOffset
      ? yOffset > 0
        ? `margin-top: ${Math.abs(yOffset)}px`
        : `margin-bottom: ${Math.abs(yOffset)}px`
      : ''};
  right: ${({xOffset}) => xOffset}px;
  border-radius: ${({scale}) => (width * (scale || 1)) / 2}px;
  background-color: ${({theme}) => theme.colors.accent}27;
`;

export const PantryTray = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  align-items: center;
  align-self: center;
  width: 90%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${({theme}) => theme.colors.main};
  padding-top: 5px;
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() - 10 : 8}px;
`;

export const PantryTrayText = styled(Text)`
  color: ${({theme}) => theme.colors.text_white};
  font-weight: 700;
`;

export const TrayArrowIcon = styled(TrayArrow).attrs({
  width: 18,
  height: 18,
})``;

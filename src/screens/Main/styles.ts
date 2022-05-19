import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import Text from '../../components/Text';
import TrayArrow from '../../assets/svgs/tray_arrow.svg';

const {width} = Dimensions.get('window');

export const KeyboardView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 60,
  },
})`
  flex: 1;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  align-self: center;
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: 20px;
  border-radius: 5px;
  margin-bottom: 20px;

  shadow-color: ${Platform.OS === 'ios' ? '#00000022' : '#00000066'};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
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
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const TrayArrowIcon = styled(TrayArrow).attrs({
  width: 18,
  height: 18,
})``;

import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {MotiView} from 'moti';

import Text from '../Text';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Container = styled(Animated.View)<{multiline?: boolean}>`
  height: ${({multiline}) => (multiline ? 90 : 45)}px;
  width: 100%;
  flex-direction: row;
  border-radius: 7px;
  border-width: 1.5px;
  border-color: ${({theme}) => theme.colors.gray};
  z-index: 2;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-horizontal: 15px;
  color: ${({theme}) => theme.colors.text};
`;

export const PlaceholderMoti = styled(MotiView)`
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: 5px;
  position: absolute;
  left: 15px;
  top: 9px;
`;

export const Placeholder = styled(Text)`
  color: ${({theme}) => theme.colors.dark_gray};
  font-size: 16px;
`;

export const InfoButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Error = styled(Text)``;

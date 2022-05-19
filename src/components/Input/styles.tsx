import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {MotiView} from 'moti';

import Text from '../Text';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Container = styled(Animated.View)<{multiline?: boolean}>`
  height: ${({multiline}) => (multiline ? 90 : 50)}px;
  width: 100%;
  flex-direction: row;
  border-radius: 7px;
  border-width: 1.5px;
  border-color: ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.background};
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
  top: 13px;
`;

export const Placeholder = styled(Text)<{state: number}>`
  color: ${({theme, state}) =>
    state === 0
      ? theme.colors.error
      : state === 1
      ? theme.colors.gray
      : theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 16px;
`;

export const InfoButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Error = styled(Text)`
  text-align: left;
  color: ${({theme}) => theme.colors.error};
`;

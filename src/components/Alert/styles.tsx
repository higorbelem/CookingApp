import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import M from 'react-native-modal';

import T from '../Text';

const {width} = Dimensions.get('window');

export const Modal = styled(M as any)`
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Container = styled.View`
  position: absolute;
  width: ${width * 0.9}px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
  align-items: center;
`;

export const Text = styled(T)`
  flex: 1;
  font-size: 20px;
  text-align: center;
  padding-vertical: 10px;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
`;

export const Button = styled.TouchableOpacity<{
  isPrimary?: boolean;
  hasMargin?: boolean;
}>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, isPrimary}) =>
    isPrimary ? theme.colors.main : 'transparent'};
  border: ${({theme, isPrimary}) =>
    isPrimary ? 'none' : `2px solid ${theme.colors.main}`};
  margin-top: ${({hasMargin}) => (hasMargin ? 8 : 0)}px;
  border-radius: 10px;
`;

export const ButtonText = styled(T)<{
  isPrimary?: boolean;
}>`
  width: 100%;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme, isPrimary}) =>
    isPrimary ? theme.colors.text_white : theme.colors.main};
`;

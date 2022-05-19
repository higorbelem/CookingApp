import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Plus from '../../../assets/svgs/plus.svg';
import Minus from '../../../assets/svgs/minus.svg';
import Text from '../../../components/Text';
import defaultTheme from '../../../assets/theme';

export const Container = styled.TouchableOpacity`
  width: 50%;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  margin: 10px;

  shadow-color: ${Platform.OS === 'ios' ? '#00000022' : '#00000099'};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleContainer = styled.View`
  padding: 5px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const Subtitle = styled(Text)`
  text-align: left;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
`;

export const QuantContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const QuantInputContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const QuantInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: defaultTheme.colors.dark_gray,
}))`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;

export const MetricText = styled(Text)`
  flex: 1;
  font-size: 16px;
  text-align: left;
  margin-left: 3px;
`;

export const QuantButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(Plus)``;

export const MinusIcon = styled(Minus)``;

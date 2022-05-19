import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../../components/Text';

export const Container = styled.View<{
  first: boolean;
}>`
  flex-direction: row;
  width: 100%;
  height: 85px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  margin: 6px;
  margin-top: ${({first}) => (first ? '0px' : '15px')};

  shadow-color: ${Platform.OS === 'ios' ? '#00000022' : '#00000066'};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`;

export const Image = styled.Image`
  width: 85px;
  height: 85px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled(Text)`
  flex: 1;
  height: 30px;
  text-align: left;
  font-size: 17px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Date = styled(Text)`
  height: 30px;
  font-size: 14px;
`;

export const Subtitle = styled(Text)`
  flex: 1;
  text-align: left;
  font-size: 13px;
  line-height: 15px;
`;

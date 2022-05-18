import styled from 'styled-components/native';

import Text from '../../../../components/Text';

export const Container = styled.TouchableOpacity<{
  first: boolean;
  size: number;
}>`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  margin: 5px;
  margin: 6px;
  margin-left: ${({first}) => (first ? '0px' : '15px')};
  max-width: ${({size}) => size}px;

  shadow-color: ${Platform.OS === 'ios' ? '#00000022' : '#00000066'};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`;

export const Image = styled.Image<{size: number}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleContainer = styled.View`
  padding: 10px;
`;

export const Title = styled(Text)`
  text-align: left;
  font-size: 15px;
  font-weight: 700;
`;

export const Subtitle = styled(Text)`
  text-align: left;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
`;

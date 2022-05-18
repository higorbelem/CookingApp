import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../../../components/Text';

export const Container = styled.TouchableOpacity<{
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

export const TitleContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled(Text)`
  height: 30px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
`;

export const Subtitle = styled(Text)`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 15px;
`;

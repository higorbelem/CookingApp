import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Text from '../../components/Text';

const {width, height} = Dimensions.get('window');

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    padding: 20,
  },
})`
  flex: 1;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  height: ${height * 0.4}px;
`;

export const IngredientsContainer = styled.View`
  flex: 1;
`;

export const IngredientContainer = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const MetricText = styled(Text)`
  text-align: left;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
`;

export const IngredientText = styled(Text)`
  text-align: left;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  margin-left: 7px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundCircle = styled.View<{
  scale?: number;
  yOffset?: number;
  xOffset?: number;
}>`
  position: absolute;
  ${({xOffset}) => (xOffset ? `right: ${xOffset}px;` : '')}
  ${({yOffset}) => (yOffset ? `top: ${yOffset}px;` : '')}
  width: ${({scale}) => width * (scale || 1)}px;
  height: ${({scale}) => width * (scale || 1)}px;
  border-radius: ${({scale}) => (width * (scale || 1)) / 2}px;
  background-color: ${({theme}) => theme.colors.secondary}45;
`;

export const Image = styled.Image`
  width: ${width * 0.55}px;
  height: ${width * 0.55}px;
  border-radius: ${width * 0.55}px;
  margin-right: -30px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.main};
  text-align: left;
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const MethodText = styled(Text)`
  text-align: left;
`;

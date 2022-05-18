import styled from 'styled-components/native';

import History from '../../assets/svgs/history.svg';
import ArrowLeft from '../../assets/svgs/arrow_left.svg';
import Plus from '../../assets/svgs/plus.svg';
import Text from '../Text';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  flex: 1;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const HistoryIcon = styled(History)``;

export const PlusIcon = styled(Plus)``;

export const ArrowLeftIcon = styled(ArrowLeft)``;

export const Empty = styled.View`
  height: 60px;
  width: 60px;
`;

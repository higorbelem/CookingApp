import styled from 'styled-components/native';

import Text from '../../../components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-top: 30px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  width: 100%;
`;

export const EmptyContainer = styled.View`
  width: 100%;
  align-self: center;
  align-items: center;
  padding: 20px;
`;

export const EmptyText = styled(Text)`
  font-size: 18px;
  margin-top: 10px;
`;

export const EmptyButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.main};
  margin-top: 15px;
`;

export const EmptyButtonText = styled(Text)`
  font-size: 18px;
  color: ${props => props.theme.colors.text_white};
`;

import styled from 'styled-components/native';

import Empty from '../../../assets/svgs/empty_favorite.svg';
import Text from '../../../components/Text';

export const Container = styled.View`
  align-items: flex-start;
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
})``;

export const EmptyContainer = styled.View`
  align-self: center;
  padding: 20px;
`;

export const EmptyImage = styled(Empty)``;

export const EmptyText = styled(Text)`
  font-size: 18px;
  margin-top: 10px;
`;

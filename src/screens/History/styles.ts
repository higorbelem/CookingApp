import styled from 'styled-components/native';

import Text from '../../components/Text';

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

export const EmptyText = styled(Text)`
  font-size: 18px;
`;

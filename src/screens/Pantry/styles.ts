import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../components/Text';

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    padding: 5,
  },
})`
  flex: 1;
`;

export const SearchInput = styled.TextInput`
  width: 95%;
  align-self: center;
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: 20px;
  border-radius: 5px;
  margin-bottom: 20px;

  shadow-color: ${Platform.OS === 'ios' ? '#00000055' : '#000000AA'};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const EmptyText = styled(Text)`
  width: 100%;
  font-size: 18px;
  align-self: center;
  text-align: center;
  margin-top: 20px;
`;

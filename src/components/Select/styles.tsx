import {MotiView} from 'moti';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import SearchIco from '../../assets/svgs/search.svg';
import ChevronDownIco from '../../assets/svgs/chevron_down.svg';
import defaultTheme from '../../assets/theme';
import Text from '../Text';

const {width, height} = Dimensions.get('screen');

interface SProps {
  enabledList?: boolean;
  small?: boolean;
  paddingLeft?: number;
  halfSize?: boolean;
  error?: any;
}

export const Container = styled.View<SProps>`
  width: ${({halfSize}) => (halfSize ? 50 : 100)}%;
  height: auto;
  z-index: ${({enabledList}) => (enabledList ? 9999 : 3)};
  padding-left: ${({paddingLeft}) => (paddingLeft ? paddingLeft : 0)}px;
  margin: 4px 0 4px 0;
`;

export const InputContainer = styled.TouchableOpacity<SProps>`
  margin-top: 1px;
  height: 49px;
  padding-left: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: ${({theme}) => theme.colors.gray};
  border-width: 1.5px;
  border-bottom-width: ${({enabledList}) => (enabledList ? 0.5 : 1)}px;
  border-bottom-left-radius: ${({enabledList}) => (enabledList ? 0 : 10)}px;
  border-bottom-right-radius: ${({enabledList}) => (enabledList ? 0 : 10)}px;
  border-radius: 7px;
  z-index: 2;

  ${({error, theme}) =>
    error ? `border: 1px solid ${theme.colors.error}` : ''};
`;

export const PlaceHolder = styled(Text)<SProps>`
  color: ${({theme}) => theme.colors.dark_gray};
  font-size: 16px; ;
`;

export const LabelPlaceHolder = styled(Text)<SProps>`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
`;

export const LabelSearch = styled(Text)<SProps>`
  margin-left: 10px;
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
`;

export const Icon = styled(ChevronDownIco).attrs({
  width: 12,
  height: 12,
})<SProps>`
  margin-right: 10px;
`;

export const Animated = styled(MotiView).attrs({
  transition: {
    type: 'timing',
    duration: 400,
  },
})`
  overflow: hidden;
  z-index: 1;
`;

export const ListContainer = styled.View<SProps>`
  height: ${({small}) => (small ? 75 : 140)}px;
  border-top-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-color: ${({theme}) => theme.colors.gray};
  border-width: 1px;
  border-radius: 10px;
`;

export const List = styled.ScrollView``;

export const LabelButton = styled.TouchableOpacity`
  padding: 8px 8px 8px 16px;
`;

export const Label = styled(Text)<SProps>`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  text-align: left;
`;

export const Error = styled(Text)<{errorColor?: string}>`
  color: ${({theme, errorColor}) =>
    errorColor ? errorColor : theme.colors.text};
  font-size: 14px;
  text-align: left;
  line-height: 18px;
  margin-top: 4px;
  margin-left: 4px;
`;

export const SearchContainer = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.TextInput.attrs(() => ({
  placeholderTextColor: defaultTheme.colors.dark_gray,
}))<SProps>`
  flex: 1;
  height: 100%;
  padding-left: 12px;
  color: ${({theme}) => theme.colors.text};
`;

export const SearchIcon = styled(SearchIco).attrs({
  width: 16,
  height: 16,
})<SProps>`
  margin-right: 10px;
`;

export const Back = styled.TouchableOpacity<SProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({enabledList}) => (enabledList ? width : 0)}px;
  height: ${({enabledList}) => (enabledList ? height : 0)}px;
  z-index: ${({enabledList}) => (enabledList ? 9998 : -1)};
`;

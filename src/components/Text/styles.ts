import styled from 'styled-components/native';

import {ITextProps} from './types';

export const Text = styled.Text<ITextProps>`
  font-family: ${({theme, fontFamily}) =>
    fontFamily ? fontFamily : theme.fonts.light};
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 500)};
  font-size: ${({fontSize}) => (fontSize ? fontSize : 16)}px;
  line-height: ${({lineHeight}) => (lineHeight ? lineHeight : 19)}px;
  text-align: ${({textAlign}) => (textAlign ? textAlign : 'center')};
  color: ${({theme, color}) => (color ? color : theme.colors.text)};
`;

import 'styled-components';

import theme from '../../assets/theme';

type IColors = typeof theme.colors;
type IFonts = typeof theme.fonts;

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: IFonts;
    colors: IColors;
  }
}

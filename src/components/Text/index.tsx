import React from 'react';
import {Text} from 'react-native';

import defaultTheme from '../../assets/theme';

export default ({style, children, ...rest}: any) => {
  const tmp = {
    fontFamily: defaultTheme.fonts.regular,
    color: defaultTheme.colors.text,
    textAlign: 'center',
    ...(style.length ? style[0] : {}),
  };

  return (
    <Text style={tmp} {...rest}>
      {children}
    </Text>
  );
};

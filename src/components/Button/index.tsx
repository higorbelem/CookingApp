import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  text?: string;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
};

const Button: FC<Props> = ({text, onPress, style, textStyle}) => {
  return (
    <S.Button style={style} onPress={onPress}>
      <S.Text style={textStyle}>{text}</S.Text>
    </S.Button>
  );
};

export default Button;

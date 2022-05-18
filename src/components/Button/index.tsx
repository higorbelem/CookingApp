import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  text?: string;
  onPress?: () => void;
  style?: any;
};

const Button: FC<Props> = ({text, onPress, style}) => {
  return (
    <S.Button style={style} onPress={onPress}>
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default Button;

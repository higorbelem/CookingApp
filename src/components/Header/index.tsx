import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  title: string;
  leftIcon?: 'history' | 'back';
  onLeftPress?: () => void;
  onRightPress?: () => void;
};

const Header: FC<Props> = ({title, leftIcon, onLeftPress, onRightPress}) => {
  return (
    <S.Container>
      {onLeftPress && (
        <S.Button onPress={onLeftPress}>
          {leftIcon === 'history' ? (
            <S.HistoryIcon width={35} height={35} />
          ) : leftIcon === 'back' ? (
            <S.ArrowLeftIcon width={20} height={20} />
          ) : (
            <S.Empty />
          )}
        </S.Button>
      )}

      <S.Title>{title}</S.Title>

      {onRightPress ? (
        <S.Button onPress={onRightPress}>
          <S.PlusIcon width={30} height={30} />
        </S.Button>
      ) : (
        <S.Empty />
      )}
    </S.Container>
  );
};

export default Header;

import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  title: string;
  leftIcon?: 'history' | 'back';
  rightIcon?: 'add' | 'favorite';
  onLeftPress?: () => void;
  onRightPress?: () => void;
  favorite?: boolean;
};

const Header: FC<Props> = ({
  title,
  leftIcon,
  onLeftPress,
  onRightPress,
  rightIcon,
  favorite,
}) => {
  return (
    <S.Container>
      {onLeftPress ? (
        <S.Button onPress={onLeftPress}>
          {leftIcon === 'history' ? (
            <S.HistoryIcon width={30} height={30} />
          ) : leftIcon === 'back' ? (
            <S.ArrowLeftIcon width={20} height={20} />
          ) : (
            <S.Empty />
          )}
        </S.Button>
      ) : (
        <S.Empty />
      )}

      <S.Title>{title}</S.Title>

      {onRightPress ? (
        <S.Button onPress={onRightPress}>
          {rightIcon === 'add' ? (
            <S.PlusIcon width={25} height={25} />
          ) : rightIcon === 'favorite' ? (
            favorite ? (
              <S.FavoriteIcon width={25} height={25} />
            ) : (
              <S.FavoriteOutlineIcon width={25} height={25} />
            )
          ) : (
            <S.Empty />
          )}
        </S.Button>
      ) : (
        <S.Empty />
      )}
    </S.Container>
  );
};

export default Header;

import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  image: string;
  title: string;
  description: string;
  first: boolean;
  onPress: () => void;
};

const Item: FC<Props> = ({image, title, description, first, onPress}) => {
  return (
    <S.Container first={first} activeOpacity={0.9} onPress={onPress}>
      <S.Image source={{uri: image}} />

      <S.TitleContainer>
        <S.Title numberOfLines={2}>{title}</S.Title>
        <S.Subtitle numberOfLines={3}>{description}</S.Subtitle>
      </S.TitleContainer>
    </S.Container>
  );
};

export default Item;

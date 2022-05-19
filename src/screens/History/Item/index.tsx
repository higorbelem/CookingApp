import React, {FC} from 'react';

import * as S from './styles';

type Props = {
  image: string;
  title: string;
  description: string;
  date: string;
  first: boolean;
};

const Item: FC<Props> = ({image, title, description, date, first}) => {
  return (
    <S.Container first={first}>
      <S.Image source={{uri: `data:image/png;base64,${image}`}} />

      <S.Content>
        <S.TitleContainer>
          <S.Title numberOfLines={1}>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.TitleContainer>
        <S.Subtitle numberOfLines={3}>{description}</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default Item;

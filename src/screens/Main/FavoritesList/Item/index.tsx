import React, {FC} from 'react';
import {Dimensions} from 'react-native';

import * as S from './styles';

type Props = {
  image: string;
  title: string;
  description: string;
  first: boolean;
  onPress: () => void;
};

const {width} = Dimensions.get('window');

const Item: FC<Props> = ({image, title, description, first, onPress}) => {
  return (
    <S.Container
      first={first}
      size={width * 0.4}
      activeOpacity={0.9}
      onPress={onPress}>
      <S.Image source={{uri: image}} size={width * 0.4} />

      <S.TitleContainer>
        <S.Title numberOfLines={1}>{title}</S.Title>
        <S.Subtitle numberOfLines={2}>{description}</S.Subtitle>
      </S.TitleContainer>
    </S.Container>
  );
};

export default Item;

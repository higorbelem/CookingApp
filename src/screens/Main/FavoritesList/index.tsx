import React, {FC} from 'react';

import {IIngredient} from '../../../@types/ingredient';
import {IRecipe} from '../../../@types/recipe';
import Item from './Item';

import * as S from './styles';

type Props = {
  data: IRecipe[];
  onPress: (item: IRecipe) => void;
};

const FavoriteList: FC<Props> = ({data, onPress}) => {
  return (
    <S.Container>
      <S.Title>Favorites</S.Title>

      {data?.length ? (
        <S.Scroll horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item: IRecipe, index) => (
            <Item
              key={item.id}
              image={item.image}
              title={item.name}
              description={item.ingredients
                .map(
                  (ingredient: IIngredient) =>
                    `${ingredient.quantity.value}${ingredient.quantity.metric} ${ingredient.name}`,
                )
                .join(', ')}
              first={index === 0}
              onPress={() => onPress(item)}
            />
          ))}
        </S.Scroll>
      ) : (
        <S.EmptyContainer>
          <S.EmptyImage width={180} height={180} />
          <S.EmptyText>No favorite recipes yet</S.EmptyText>
        </S.EmptyContainer>
      )}
    </S.Container>
  );
};

export default FavoriteList;

import React, {FC} from 'react';

import {IIngredient} from '../../../@types/ingredient';
import {IRecipe} from '../../../@types/recipe';
import Item from './Item';
import * as S from './styles';

type Props = {
  data: IRecipe[];
  onPress: (item: IRecipe) => void;
  onAddRecipePress: () => void;
};

const OthersList: FC<Props> = ({data, onPress, onAddRecipePress}) => {
  return (
    <S.Container>
      <S.Title>Others</S.Title>
      {data?.length ? (
        <S.Scroll showsHorizontalScrollIndicator={false}>
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
          <S.EmptyText>No recipes added</S.EmptyText>

          <S.EmptyButton onPress={onAddRecipePress}>
            <S.EmptyButtonText>Add recipe</S.EmptyButtonText>
          </S.EmptyButton>
        </S.EmptyContainer>
      )}
    </S.Container>
  );
};

export default OthersList;

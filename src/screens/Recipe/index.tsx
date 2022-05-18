import React, {FC} from 'react';

import {IRecipe} from '../../@types/recipe';
import Button from '../../components/Button';
import Header from '../../components/Header';
import * as S from './styles';

type Props = {
  navigation: any;
  route: {
    params: {
      recipe: IRecipe;
    };
  };
};

const Recipe: FC<Props> = ({navigation, route}) => {
  const recipe = route.params.recipe;

  const onCook = () => {};

  return (
    <S.Safe>
      <Header
        title={recipe.name}
        leftIcon="back"
        onLeftPress={navigation.goBack}
      />
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.TopContainer>
          <S.IngredientsContainer>
            <S.Title>Ingredients</S.Title>

            {recipe.ingredients.map(ingredient => (
              <S.IngredientContainer>
                <S.MetricText>
                  {ingredient.quantity.value} {ingredient.quantity.metric}
                </S.MetricText>
                <S.IngredientText>{ingredient.name}</S.IngredientText>
              </S.IngredientContainer>
            ))}
          </S.IngredientsContainer>

          <S.ImageContainer>
            <S.BackgroundCircle scale={0.7} xOffset={-80} yOffset={30} />
            <S.BackgroundCircle scale={0.72} xOffset={-60} yOffset={20} />
            <S.BackgroundCircle scale={0.7} xOffset={-60} yOffset={5} />

            <S.Image source={{uri: recipe.image}} />
          </S.ImageContainer>
        </S.TopContainer>

        <S.Title>Method</S.Title>
        <S.MethodText>{recipe.method}</S.MethodText>

        <Button text="Cook" onPress={onCook} />
      </S.Scroll>
    </S.Safe>
  );
};

export default Recipe;

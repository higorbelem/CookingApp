import React, {FC, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {IIngredient} from '../../@types/ingredient';
import {IRecipe} from '../../@types/recipe';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import types from '../../store/module/types';
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
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(route.params.recipe);

  const ingredients = useSelector((state: any) => state.ingredient.ingredients);

  const onCook = () => {
    dispatch({
      type: types.ingredient.COOK,
      payload: recipe,
    });

    navigation.goBack();
  };

  const onCookPressed = () => {
    const unavailableIngredients: IIngredient[] = ingredients.filter(
      (ingredient: IIngredient) =>
        recipe.ingredients.some(
          (ingredientRecipe: IIngredient) =>
            ingredient.id === ingredientRecipe.id &&
            ingredient.quantity.value < ingredientRecipe.quantity.value,
        ),
    );

    if (!unavailableIngredients.length) {
      Alert.show({
        text: 'Do you want to cook this recipe?',
        buttons: [
          {
            text: 'Yes',
            isPrimary: true,
            onPress: onCook,
          },
          {
            text: 'No',
          },
        ],
      });
    } else {
      Alert.show({
        text: `The following ingredients are not available:\n${unavailableIngredients
          .map(item => `\u2022 ${item.name}`)
          .join('\n')}`,
        buttons: [{text: 'Ok', isPrimary: true}],
      });
    }
  };

  const onFavorite = () => {
    setRecipe(state => ({...state, favorite: !state.favorite}));
    dispatch({
      type: types.recipe.FAVORITE_RECIPE,
      payload: {
        id: recipe.id,
        favorite: !recipe.favorite,
      },
    });
  };

  return (
    <S.Safe>
      <Header
        title={recipe.name}
        leftIcon="back"
        onLeftPress={navigation.goBack}
        rightIcon="favorite"
        favorite={recipe.favorite}
        onRightPress={onFavorite}
      />
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.TopContainer>
          <S.IngredientsContainer>
            <S.Title>Ingredients</S.Title>

            {recipe.ingredients.map((ingredient, index) => (
              <S.IngredientContainer key={`${ingredient.id}-${index}`}>
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

            <S.Image source={{uri: `data:image/png;base64,${recipe.image}`}} />
          </S.ImageContainer>
        </S.TopContainer>

        <S.Title>Method</S.Title>
        <S.MethodText>{recipe.method}</S.MethodText>

        <Button text="Cook" onPress={onCookPressed} />
      </S.Scroll>
    </S.Safe>
  );
};

export default Recipe;

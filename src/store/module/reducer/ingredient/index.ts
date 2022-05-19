import {IIngredient} from '../../../../@types/ingredient';
import {IRecipe} from '../../../../@types/recipe';
import * as Types from '../../types';

const INITIAL_STATE: {
  ingredients: IIngredient[];
} = {
  ingredients: [],
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.ingredient.ADD_INGREDIENT: {
      const newState = {...state, action};

      newState.ingredients = [...newState.ingredients, action.payload];

      return newState;
    }

    case Types.ingredient.CHANGE_QUANT: {
      const newState = {...state, action};

      newState.ingredients = newState.ingredients.map(
        (ingredient: IIngredient) => {
          if (ingredient.id === action.payload.id) {
            ingredient.quantity.value = action.payload.quantity;
          }

          return ingredient;
        },
      );

      return newState;
    }

    case Types.ingredient.COOK: {
      const newState = {...state, action};
      const recipe: IRecipe = action.payload;

      newState.ingredients = newState.ingredients.map(ingredient => {
        let aux = ingredient;
        recipe.ingredients.map(recipeIngredient => {
          if (ingredient.id === recipeIngredient.id) {
            aux = {
              ...ingredient,
              quantity: {
                ...ingredient.quantity,
                value:
                  ingredient.quantity.value - recipeIngredient.quantity.value,
              },
            };
          }
        });
        return aux;
      });

      return newState;
    }

    default: {
      return state;
    }
  }
}

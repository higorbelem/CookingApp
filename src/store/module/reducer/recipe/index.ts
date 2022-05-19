import {IRecipe} from '../../../../@types/recipe';
import * as Types from '../../types';

const INITIAL_STATE: {
  recipes: IRecipe[];
} = {
  recipes: [],
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.recipe.ADD_RECIPE: {
      const newState = {...state, action};

      newState.recipes = [...newState.recipes, action.payload];

      return newState;
    }
    case Types.recipe.FAVORITE_RECIPE: {
      const newState = {...state, action};

      newState.recipes = newState.recipes.map(item => {
        if (item.id === action.payload.id) {
          item.favorite = action.payload.favorite;
        }
        return item;
      });

      return newState;
    }

    default: {
      return state;
    }
  }
}

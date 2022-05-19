import {IIngredient} from './ingredient';

export type IRecipe = {
  id: string;
  name: string;
  image: string;
  ingredients: IIngredient[];
  method: string;
  favorite: boolean;
};

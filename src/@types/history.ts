import {IRecipe} from './recipe';

export type IHistory = {
  id: string;
  recipe: IRecipe;
  date: moment.Moment;
};

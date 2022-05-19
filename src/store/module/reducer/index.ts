import {combineReducers} from 'redux';

import ingredient from './ingredient';
import recipe from './recipe';
import app from './app';

export default combineReducers({
  ingredient,
  recipe,
  app,
});

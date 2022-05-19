import {combineReducers} from 'redux';

import ingredient from './ingredient';
import recipe from './recipe';
import app from './app';
import history from './history';

export default combineReducers({
  ingredient,
  recipe,
  app,
  history,
});

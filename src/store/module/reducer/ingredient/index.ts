import * as Types from '../../types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.ingredient.TESTE: {
      const newState = {...state, action};

      return newState;
    }

    default: {
      return state;
    }
  }
}

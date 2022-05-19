import moment from 'moment';
import uuid from 'react-native-uuid';

import {IHistory} from '../../../../@types/history';
import * as Types from '../../types';

const INITIAL_STATE: {
  history: IHistory[];
} = {
  history: [],
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.history.ADD_TO_HISTORY: {
      const newState = {...state, action};

      newState.history = [
        ...newState.history,
        {
          id: uuid.v4() as string,
          recipe: action.payload,
          date: moment(),
        },
      ];

      return newState;
    }

    default: {
      return state;
    }
  }
}

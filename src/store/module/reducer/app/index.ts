import * as Types from '../../types';

const INITIAL_STATE: {
  onboardingDone: boolean;
} = {
  onboardingDone: false,
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.app.DONE_ONBOARDING: {
      const newState = {...state, action};

      newState.onboardingDone = true;

      return newState;
    }

    default: {
      return state;
    }
  }
}

import { errorActions } from 'actions';

const defaultState = {
  errorMessage: '',
  isOpen: false,
};

export default function errorManager(state = defaultState, action) {
  switch (action.type) {
    case errorActions.CLOSE_ERROR:
      return {
        ...state,
        errorMessage: '',
      };
    case errorActions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case errorActions.GENERAL_ERROR:
      return state;
    case errorActions.UNAUTHORIZED:
      return {
        ...state,
        errorMessage: action.fetchResponse,
        isOpen: true,
      };
    default:
      return state;
  }
}

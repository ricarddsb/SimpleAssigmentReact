import { errorActions } from 'actions';

const defaultState = {
  errorType: {},
  isOpen: false,
};

export default function errorManager(state = defaultState, action) {
  switch (action.type) {
    case errorActions.FETCH_DISCO_DATA_FAILED:
      return state;
    default:
      return state;
  }
}

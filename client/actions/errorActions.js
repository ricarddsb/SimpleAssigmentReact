export const CLOSE_ERROR = 'CLOSE_ERROR';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GENERAL_ERROR = 'GENERAL_ERROR';
export const UNAUTHORIZED = 'UNAUTHORIZED';

export function closeError() {
  return {
    type: CLOSE_ERROR,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

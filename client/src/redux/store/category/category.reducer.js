import { CATEGORY_DATA } from '../../../constants';

const INITIAL_STATE = {
  section: CATEGORY_DATA,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoryReducer;

import { createSelector } from 'reselect';

const selectCategory = state => state.category;

const selectCategorySection = createSelector(
  [selectCategory],
  category => category.section
);

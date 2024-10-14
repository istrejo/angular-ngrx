import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemsState } from '@core/models/items.state';

// TODO: Es el selector que tiene relacion con la propiedad "items"
export const slectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  slectItemsFeature,
  (state: ItemsState) => state.items
);
export const selectLoading = createSelector(
  slectItemsFeature,
  (state: ItemsState) => state.loading
);

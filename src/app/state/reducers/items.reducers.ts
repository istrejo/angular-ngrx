import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store'; //todo <----------
import { loadedItems, loadItems } from '../actions/items.actions';
import { ItemsState } from '@core/models/items.state';

// TODO : (2) Initial State!
export const initialState: ItemsState = { loading: false, items: [] };
//TODO: (3)

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedItems, (state, { items }) => {
    return { ...state, items, loading: false };
  })
);

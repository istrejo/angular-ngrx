import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store';
import { loadItems } from '../actions/items.actions';

// TODO : (2) Initial State!
export const initialState: {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
} = { loading: false, items: [] };
//TODO: (3)

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  })
  // on(loadItems, (state) => {
  //   return state;
  // }),
  // on(loadItems, (state) => {
  //   return state;
  // }),
  // on(loadItems, (state) => {
  //   return state;
  // })
);

import { ItemModel } from '@core/models/Item.interface';
import { ItemsState } from '@core/models/items.state';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  items: ItemsState;
  // users: ItemsState;
  // auth: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer,
};

import React from 'react';
import { createStore, combineReducers } from 'redux';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
  Provider,
} from 'react-redux';
import counterReducer from './counter/reducers';

export { useDispatch };
export * from '/hooks/store';

const rootReducer = combineReducers({
  somethingToCount: counterReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

// use this selector to access state. This ensures typings within the hook.
export const useSelector: TypedUseSelectorHook<StoreState> = useReduxSelector;

// use this function to create the provider for the store
export const createStoreProvider = (): React.FC<{}> => ({ children }) => {
  const store = createStore(rootReducer);
  return <Provider store={store}>{children}</Provider>;
};

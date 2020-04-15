import { useCallback } from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch, StoreState } from '/store';

export type StoreSelector<V extends Readonly<V>> = (state: StoreState) => V;

export type StoreActionProperties<P extends StoreActionProperties<P>> = {
  [property: string]: any;
};

export type StoreAction<
  P extends StoreActionProperties<P>
> = StoreActionProperties<P> & Action<Readonly<string>>;

export type StoreActionFunction<V> = (value: V) => StoreAction<V>;

export const useStore = <V extends Readonly<V>>(
  selector: StoreSelector<V>,
  action: StoreActionFunction<V>,
): [V, StoreActionFunction<V>] => {
  const value = useSelector(selector);
  const dispatch = useDispatch<StoreActionFunction<StoreAction<V>>>();
  const dispatchAction = useCallback<StoreActionFunction<V>>(
    (v) => dispatch(action(v)),
    [action, dispatch],
  );
  return [value, dispatchAction];
};

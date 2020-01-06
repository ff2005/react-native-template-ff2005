import { types } from './types';

interface IBaseAction {
  type: types;
}

interface IIncrementAction extends IBaseAction {
  quantity: number;
}

export const increment = (quantity: number = 1): IIncrementAction => ({
  type: types.INCREMENT,
  quantity: quantity > 0 ? quantity : 1,
});

interface IDecrementAction extends IBaseAction {
  quantity: number;
}

export const decrement = (quantity: number = 1): IDecrementAction => ({
  type: types.DECREMENT,
  quantity: quantity > 0 ? quantity : 1,
});

export type IAction = IIncrementAction | IDecrementAction;

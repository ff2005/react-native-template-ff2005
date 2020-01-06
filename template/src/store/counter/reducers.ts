import { types } from './types';
import { IAction } from './actions';

export interface IState {
  counter: number;
}

const initState: IState = {
  counter: 0,
};

function reducer(state: Readonly<IState> = initState, action: IAction): IState {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.quantity,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.quantity,
      };
    default:
      return state;
  }
}

export default reducer;

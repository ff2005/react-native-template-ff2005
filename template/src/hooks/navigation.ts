import { useContext } from 'react';
import {
  NavigationContext,
  NavigationScreenProp,
  NavigationRoute,
} from 'react-navigation';

type Props<S> = NavigationScreenProp<S & NavigationRoute>;

export function useNavigation<S>(): Props<S> {
  return useContext(NavigationContext) as Props<S>;
}

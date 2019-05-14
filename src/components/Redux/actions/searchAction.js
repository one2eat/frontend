import {SEARCH} from './types';

export function search(value) {
  return {type: SEARCH, value};
}
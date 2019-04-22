import { useReducer, useCallback } from 'react';

type UseTagsActions = {
  type: 'TAG_INSERT' | 'TAG_REMOVE';
  payload: string;
};

type UseTagsState = {
  tags: string[];
};

function reducer(state: UseTagsState, action: UseTagsActions) {
  switch (action.type) {
    case 'TAG_INSERT':
      return {
        ...state,
        tags: state.tags.concat(action.payload),
      };
    case 'TAG_REMOVE':
      return {
        ...state,
        tags: state.tags.filter(t => t !== action.payload),
      };
    default:
      return state;
  }
}

export default function useTags<T>(initialState: UseTagsState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch] as [UseTagsState, typeof dispatch];
}

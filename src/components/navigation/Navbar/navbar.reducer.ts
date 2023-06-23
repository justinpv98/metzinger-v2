export enum actionTypes {
  CLEAR_HISTORY = "CLEAR_HISTORY",
  CLOSE_NAVBAR = "CLOSE_NAVBAR",
  HIDE_NAVBAR = "HIDE_NAVBAR",
  OPEN_NAVBAR = "OPEN_NAVBAR",
  POP_HISTORY = "POP_HISTORY",
  SHOW_NAVBAR = "SHOW_NAVBAR",
  UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY",
  UPDATE_HISTORY = "UPDATE_HISTORY",
}

type Action =
  | {
      type: actionTypes.CLEAR_HISTORY;
    }
  | { type: actionTypes.CLOSE_NAVBAR }
  | {
      type: actionTypes.HIDE_NAVBAR;
    }
  | {
      type: actionTypes.OPEN_NAVBAR;
    }
  | {
      type: actionTypes.POP_HISTORY;
    }
  | {
      type: actionTypes.SHOW_NAVBAR;
      payload?: boolean;
    }
  | {
      type: actionTypes.UPDATE_CURRENT_CATEGORY;
      payload: string;
    }
  | {
      type: actionTypes.UPDATE_HISTORY;
      payload: string;
    };

type State = {
  currentCategory: string;
  history: string[];
  shouldShowNav: boolean;
  isOpen: boolean;
  isTransparent: boolean;
};

export const initialState = {
  currentCategory: "",
  history: [],
  shouldShowNav: true,
  isOpen: false,
  isTransparent: false,
};

export default function navbarReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.CLEAR_HISTORY:
      return { ...state, isOpen: false, history: [] };
    case actionTypes.CLOSE_NAVBAR:
      return { ...state, isOpen: false };
    case actionTypes.HIDE_NAVBAR:
      return { ...state, shouldShowNav: false, isTransparent: false };
    case actionTypes.OPEN_NAVBAR:
      return { ...state, isOpen: true };
    case actionTypes.POP_HISTORY: {
      const newHistory = state.history.slice(0, state.history.length - 1);
      return { ...state, history: newHistory };
    }
    case actionTypes.SHOW_NAVBAR:
      return {
        ...state,
        shouldShowNav: true,
        isTransparent: action.payload || false,
      };
    case actionTypes.UPDATE_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case actionTypes.UPDATE_HISTORY: {
      const history =
        state.history.length > 0
          ? [...state.history, action.payload]
          : [action.payload];
      return { ...state, history };
    }
    default:
      return state;
  }
}

import { Actions, ActionType, DataType } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
  switch (action.type) {
    case Actions.SET_TENANT:
      return { ...state, tenant: action.payload.tenant };

    case Actions.SET_SIDEBAR:
      return { ...state, sidebar: action.payload.sidebar };

    default:
      return state;
  }
};

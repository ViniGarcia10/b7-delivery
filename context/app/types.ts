import { Dispatch, ReactNode } from "react";
import { Tenant } from "../../@types/Tenant";

export type DataType = {
  tenant: Tenant | null;
  sidebar: boolean;
};

export type ActionType = {
  type: Actions;
  payload?: any;
};

export type ContextType = {
  state: DataType;
  dispatch: Dispatch<ActionType>;
};

export type ProviderType = {
  children: ReactNode;
};

export enum Actions {
  SET_TENANT,
  SET_SIDEBAR
}

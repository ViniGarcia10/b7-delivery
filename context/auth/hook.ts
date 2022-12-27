import { useContext } from "react";
import { AuthContext } from ".";
import { User } from "../../@types/User";
import { Actions } from "./types";

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);

  return {
    ...state,
    setUser: (user: User | null) => {
      dispatch({
        type: Actions.SET_USER,
        payload: { user },
      });
    },
    setToken: (token: string) => {
      dispatch({
        type: Actions.SET_TOKEN,
        payload: { token },
      });
    },
  };
};

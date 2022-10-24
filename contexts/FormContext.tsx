import { createContext, ReactNode, useEffect, useReducer } from "react";
import FormReducer from "./FormReducer";

interface contextProps {}
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const INITIAL_STATE = {
  // currentUser: console.log("Context Works")
  // currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const FormContext = createContext<contextProps | any>(INITIAL_STATE);

export const FormContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  useEffect(() => {
    // console.log(state.currentUser);
    // localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return <FormContext.Provider value={{ currentUser: state.currentUser, dispatch }}>{children}</FormContext.Provider>;
};

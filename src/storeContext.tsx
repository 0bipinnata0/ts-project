import { type ReactNode, createContext, useRef } from "react";
import createStore, { Store } from "./utils/createStore";

export type State = { count: number; text?: string };
const StoreContext = createContext<Store<State>>(
  createStore<State>({ count: 0, text: "hello" })
);
export default StoreContext;

export const StoreProvider = ({
  initialState,
  children,
}: {
  initialState: State;
  children: ReactNode;
}) => {
  const storeRef = useRef<Store<State>>();
  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

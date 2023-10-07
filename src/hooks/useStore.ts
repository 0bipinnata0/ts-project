import { useEffect, useState } from "react";
import { type Store } from "../utils/createStore";

const useStore = <T>(store: Store<T>) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState()); // [1]
    return unsubscribe;
  }, [store]);
  return [state, store.setState] as const;
};

export default useStore;

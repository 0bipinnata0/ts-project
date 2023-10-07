import { useCallback, useSyncExternalStore } from "react";
import { Store } from "../utils/createStore";

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) =>
  useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [selector, store])
  );

export default useStoreSelector;

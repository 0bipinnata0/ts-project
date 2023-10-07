import { useSyncExternalStore } from "react";
import { Store } from "../utils/createStore";

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) =>
  useSyncExternalStore(store.subscribe, () => selector(store.getState()));
export default useStoreSelector;

import { useContext, useSyncExternalStore } from "react";
import StoreContext, { type State } from "../storeContext";

const useSelector = <S>(selector: (state: State) => S) => {
  const store = useContext(StoreContext);
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
};
export default useSelector;

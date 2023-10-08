import { useContext } from "react";
import StoreContext from "../storeContext";

const useSetState = () => {
  const store = useContext(StoreContext);
  return store.setState;
};
export default useSetState;

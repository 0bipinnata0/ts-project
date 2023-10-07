import { useCallback } from "react";
import useRenderCount from "../hooks/useRenderCount";
import useStoreSelector from "../hooks/useStoreSelector";
import store from "../store";

const Component1 = () => {
  const count = useRenderCount();
  const state = useStoreSelector(
    store,
    useCallback((state) => state.count1, [])
  );
  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };
  return (
    <div>
      render:{count} --- count1: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Component1;

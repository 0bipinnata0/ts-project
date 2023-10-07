import useRenderCount from "../hooks/useRenderCount";
import useStoreSelector from "../hooks/useStoreSelector";
import store from "../store";

const selectCount2 = (state: ReturnType<typeof store.getState>) => state.count2;

const Component2 = () => {
  const count = useRenderCount();
  const state = useStoreSelector(store, selectCount2);
  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };
  return (
    <div>
      render:{count} --- count2: {state} <button onClick={inc}>+1</button>
    </div>
  );
};
export default Component2;

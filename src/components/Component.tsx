import useRenderCount from "../hooks/useRenderCount";
import useSelector from "../hooks/useSelector";
import useSetState from "../hooks/useSetState";
import { State } from "../storeContext";

const selectCount = (state: State) => state.count;
const Component = () => {
  const count = useSelector(selectCount);
  const setState = useSetState();
  const renderCount = useRenderCount();
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      render:{renderCount} --- count: {count} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Component;

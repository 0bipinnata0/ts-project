import { useCount1 } from "../hooks/useCount1";
import useRenderCount from "../hooks/useRenderCount";

const Counter1 = () => {
  const [count1, setCount1] = useCount1();
  const count = useRenderCount();
  return (
    <div>
      Count1: {count1} -- render{count}
      <button onClick={() => setCount1((c) => c + 1)}>+1 </button>
    </div>
  );
};

export default Counter1;

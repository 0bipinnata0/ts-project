import { useCount2 } from "../hooks/useCount2";
import useRenderCount from "../hooks/useRenderCount";

const Counter2 = () => {
  const [count2, setCount2] = useCount2();
  const count = useRenderCount();
  return (
    <div>
      Count2: {count2} -- render{count}
      <button onClick={() => setCount2((c) => c + 1)}>+1 </button>
    </div>
  );
};
export default Counter2;

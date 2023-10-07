import useCount4 from "../hooks/useCount4";
import useRenderCount from "../hooks/useRenderCount";

const Counter4 = () => {
  const [count4, setCount4] = useCount4();
  const count = useRenderCount();
  return (
    <div>
      Count4: {count4} -- render{count}
      <button onClick={() => setCount4((c) => c + 1)}>+1 </button>
    </div>
  );
};
export default Counter4;

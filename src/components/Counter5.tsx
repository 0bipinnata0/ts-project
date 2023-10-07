import useCount5 from "../hooks/useCount5";
import useRenderCount from "../hooks/useRenderCount";

const Counter5 = () => {
  const [count5, setCount5] = useCount5();
  const count = useRenderCount();
  return (
    <div>
      Count5: {count5} -- render{count}
      <button onClick={() => setCount5((c) => c + 1)}>+1 </button>
    </div>
  );
};
export default Counter5;

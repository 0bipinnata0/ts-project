import useCount3 from "../hooks/useCount3";
import useRenderCount from "../hooks/useRenderCount";

const Counter3 = () => {
  const [count3, setCount3] = useCount3();
  const count = useRenderCount();
  return (
    <div>
      Count3: {count3} -- render{count}
      <button onClick={() => setCount3((c) => c + 1)}>+1 </button>
    </div>
  );
};
export default Counter3;

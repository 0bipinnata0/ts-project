import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Counter4 from "./components/Counter4";
import Counter5 from "./components/Counter5";
import { Count1Provider } from "./hooks/useCount1";
import { Count2Provider } from "./hooks/useCount2";
import { Count3Provider } from "./hooks/useCount3";
import { Count4Provider } from "./hooks/useCount4";
import { Count5Provider } from "./hooks/useCount5";

const Parent = () => (
  <div>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
    <Counter3 />
    <Counter3 />
    <Counter4 />
    <Counter4 />
    <Counter5 />
    <Counter5 />
  </div>
);
const App = () => (
  <Count1Provider initialValue={11}>
    <Count2Provider>
      <Count3Provider initialValue={33}>
        <Count4Provider initialValue={44}>
          <Count5Provider initialValue={55}>
            <Parent />
          </Count5Provider>
        </Count4Provider>
      </Count3Provider>
    </Count2Provider>
  </Count1Provider>
);

export default App;

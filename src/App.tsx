import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Count1Provider from "./provider/Count1Provider";
import Count2Provider from "./provider/Count2Provider";

const Parent = () => (
  <div>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
  </div>
);

const App = () => (
  <Count1Provider>
    <Count2Provider>
      <Parent />
    </Count2Provider>
  </Count1Provider>
);
export default App;

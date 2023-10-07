import ReactDOM from "react-dom/client";
const rootEl = document.getElementById("root");

const states: Record<string, number> = {};

function _getM2(initialValue: number, key: string) {
  if (states[key] === undefined) {
    states[key] = initialValue;
  }

  return states[key];
}

function _setM2(v: number, key: string) {
  states[key] = v;
  ReactDOM.createRoot(rootEl!).render(<Title />);
}

let prev: unknown;

function _onM(callback: () => void, value: unknown) {
  if (value === prev) return;
  callback();
  prev = value;
}

const Changed: React.FC<{ count: number }> = ({ count }) => {
  let flag = "N";
  _onM(() => {
    flag = "Y";
  }, count);

  return <span>{flag}</span>;
};

const Title = () => {
  let countH = _getM2(0, "H");
  let countW = _getM2(0, "W");

  const onClickH = () => {
    console.log("clickedH", countH);
    countH = countH + 1;
    _setM2(countH, "H");
  };

  const onClickW = () => {
    console.log("clickedW", countW);
    countW = countW + 1;
    _setM2(countW, "W");
  };

  console.log("updatedH", countH);
  console.log("updatedW", countW);
  return (
    <>
      <button onClick={onClickH}>+</button>
      <h1>Hello+{countH}</h1>
      <Changed count={countH} />
      <button onClick={onClickW}>+</button>
      <h1>World+{countW}</h1>
    </>
  );
};

export default Title;

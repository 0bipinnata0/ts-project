import createStateContext from "../utils/createStateContext";
import useNumberState from "./useNumberState";

const [Count5Provider, useCount5] = createStateContext(useNumberState);
export { Count5Provider };

export default useCount5;

import createStateContext from "../utils/createStateContext";
import useNumberState from "./useNumberState";

const [Count1Provider, useCount1] = createStateContext(useNumberState);
export { Count1Provider };

export default useCount1;

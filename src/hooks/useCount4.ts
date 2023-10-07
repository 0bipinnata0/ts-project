import createStateContext from "../utils/createStateContext";
import useNumberState from "./useNumberState";

const [Count4Provider, useCount4] = createStateContext(useNumberState);
export { Count4Provider };

export default useCount4;

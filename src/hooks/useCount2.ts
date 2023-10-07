import createStateContext from "../utils/createStateContext";
import useNumberState from "./useNumberState";

const [Count2Provider, useCount2] = createStateContext(useNumberState);
export { Count2Provider };

export default useCount2;

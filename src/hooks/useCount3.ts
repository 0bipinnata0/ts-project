import createStateContext from "../utils/createStateContext";
import useNumberState from "./useNumberState";

const [Count3Provider, useCount3] = createStateContext(useNumberState);
export { Count3Provider };

export default useCount3;

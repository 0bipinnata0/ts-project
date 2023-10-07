import { useContext } from "react";
import Count1Context from "../context/Count1Context";

export const useCount1 = () => {
  const value = useContext(Count1Context);
  if (value === null) throw new Error("Provider missing");
  return value;
};

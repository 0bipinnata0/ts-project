import { useContext } from "react";
import Count2Context from "../context/Count2Context";

export const useCount2 = () => {
  const value = useContext(Count2Context);
  if (value === null) throw new Error("Provider missing");
  return value;
};

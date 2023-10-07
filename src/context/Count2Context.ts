import { createContext } from "react";
import { CountContextType } from ".";

const Count2Context = createContext<CountContextType | null>(null);

export default Count2Context;

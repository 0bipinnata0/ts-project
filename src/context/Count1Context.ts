import { createContext } from "react";
import { CountContextType } from ".";

const Count1Context = createContext<CountContextType | null>(null);

export default Count1Context;

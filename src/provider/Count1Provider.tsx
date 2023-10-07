import { type ReactNode, useState } from "react";
import Count1Context from "../context/Count1Context";

const Count1Provider = ({ children }: { children: ReactNode }) => (
  <Count1Context.Provider value={useState(0)}>
    {children}
  </Count1Context.Provider>
);

export default Count1Provider;

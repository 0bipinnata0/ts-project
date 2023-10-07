import { type ReactNode, useState } from "react";
import Count2Context from "../context/Count2Context";

const Count2Provider = ({ children }: { children: ReactNode }) => (
  <Count2Context.Provider value={useState(0)}>
    {children}
  </Count2Context.Provider>
);

export default Count2Provider;

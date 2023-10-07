import type { Dispatch, SetStateAction } from "react";

export type CountContextType = [number, Dispatch<SetStateAction<number>>];

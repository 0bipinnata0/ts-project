import { useState } from "react";

const useNumberState = (init?: number) => useState(init || 0);

export default useNumberState;

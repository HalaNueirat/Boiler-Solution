import {useState, useCallback} from "react";

export function useSwap(initial = false) {
  const [swapped, setSwapped] = useState<boolean>(initial);
  const toggle = useCallback(() => setSwapped((s) => !s), []);
  return {swapped, toggle};
}

import { useState, useLayoutEffect } from "react";

export default function useWindowHeight() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);
  return size;
}

import { useState, useLayoutEffect } from "react";

export default function useWindowWidth() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);
  return size;
}

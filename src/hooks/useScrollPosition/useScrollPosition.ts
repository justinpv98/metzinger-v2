import { useCallback, useEffect, useState } from "react";
import { throttle } from "@/utils/functionUtils";
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  function updatePosition() {
    setScrollPosition(window.pageYOffset);
  };

  const throttledUpdatePosition = useCallback(throttle(updatePosition, 100), [])

  useEffect(() => {
    window.addEventListener("scroll", throttledUpdatePosition);
    
    return () => window.removeEventListener("scroll", throttledUpdatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;

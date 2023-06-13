import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Hooks
import {useScrollPosition} from "@/hooks";

export default function useNavbarUI() {
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true)
  const [navTransparent, setNavTransparent] = useState(pathname === "/")

  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition === 0 && pathname === "/") {
        setShowNav(true)
      setNavTransparent(true);
    }
  }, []);

  useEffect(() => {
    if (scrollPosition == 0 && pathname === "/") {
      setNavTransparent(true);
      setShowNav(true);
    } else if (scrollPosition > previousScrollPosition) {
      setShowNav(true);
      setNavTransparent(false);
    } else {
      setNavTransparent(false);
      setShowNav(false);
    }

    setPreviousScrollPosition(scrollPosition);
  }, [scrollPosition]);

  return { showNav, navTransparent };
}

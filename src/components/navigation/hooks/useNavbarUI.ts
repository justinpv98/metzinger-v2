import React, { useEffect, useReducer, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Constants
import { actionTypes } from "../Navbar/navbar.reducer";

// Hooks
import { useScrollPosition } from "@/hooks";
import { useMediaQuery } from "@mantine/hooks";

// Reducer
import navbarReducer, {
  initialState as navbarState,
} from "../Navbar/navbar.reducer";

export default function useNavbarUI() {
  const router = useRouter();
  const pathname = usePathname();

  const isDesktop = useMediaQuery("(min-width: 1024px)", true, {
    getInitialValueInEffect: false,
  });

  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const scrollPosition = useScrollPosition();

  const initialState = { ...navbarState, isTransparent: pathname === "/" };
  const [state, dispatch] = useReducer(navbarReducer, initialState);
  const { currentCategory, history, isTransparent, isOpen, shouldShowNav } =
    state;

  useEffect(() => {
    if (pathname === "/") {
      dispatch({ type: actionTypes.SHOW_NAVBAR, payload: true });
    }
  }, [pathname]);

  useEffect(() => {
    if (scrollPosition < 20 && pathname === "/") {
      dispatch({ type: actionTypes.SHOW_NAVBAR, payload: true });
    } else if (scrollPosition < previousScrollPosition || scrollPosition < 90) {
      dispatch({ type: actionTypes.SHOW_NAVBAR, payload: false });
    } else {
      dispatch({ type: actionTypes.HIDE_NAVBAR });
    }

    setPreviousScrollPosition(scrollPosition);
  }, [scrollPosition]);

  function clearHistory() {
    dispatch({ type: actionTypes.CLEAR_HISTORY });
  }

  function openNavbar() {
    dispatch({ type: actionTypes.OPEN_NAVBAR });
  }

  function popHistory() {
    dispatch({ type: actionTypes.POP_HISTORY });
  }

  function onLinkClick(e: React.MouseEvent) {
    e.preventDefault();

    const target = e.target as HTMLLinkElement;
    const hasItems = target.getAttribute("data-haschildren") === "true";
    const level = target.getAttribute("data-level");
    const category = target.textContent || "";

    level == "1" &&
      dispatch({
        type: actionTypes.UPDATE_CURRENT_CATEGORY,
        payload: category,
      });

    if (hasItems && !isDesktop) {
      dispatch({ type: actionTypes.UPDATE_HISTORY, payload: category });
    } else {
      clearHistory();
      router.push(target.href);
    }
  }

  return {
    clearHistory,
    currentCategory,
    history,
    isDesktop,
    isOpen,
    isTransparent,
    onLinkClick,
    openNavbar,
    popHistory,
    shouldShowNav,
  };
}

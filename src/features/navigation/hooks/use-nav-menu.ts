"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Grace period so the pointer can travel from a trigger into the panel. */
const CLOSE_DELAY_MS = 120;

export function useNavMenu() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const openMenu = useCallback(
    (id: string | null) => {
      cancelClose();
      setActiveId(id);
    },
    [cancelClose],
  );

  const closeMenu = useCallback(() => {
    cancelClose();
    timer.current = setTimeout(() => setActiveId(null), CLOSE_DELAY_MS);
  }, [cancelClose]);

  const closeMenuNow = useCallback(() => {
    cancelClose();
    setActiveId(null);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  return { activeId, openMenu, closeMenu, closeMenuNow };
}

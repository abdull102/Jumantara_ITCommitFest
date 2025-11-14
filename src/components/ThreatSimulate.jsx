import { useCallback, useMemo, useState } from "react";

export function useThreatSimulate() {
  const [open, setOpen] = useState(false);
  const [scenario, setScenario] = useState(null); // "wa-invite" | "wa-apk" | "sms-prize" | null
  const [overlayOpen, setOverlayOpen] = useState(false);

  const togglePanel = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const openScenario = useCallback((type) => {
    setOpen(true);
    setScenario(type);
    setOverlayOpen(false);
  }, []);

  const onAttachmentClick = useCallback(() => {
    setOverlayOpen(true);
  }, []);

  const closeOverlay = useCallback(() => setOverlayOpen(false), []);

  const headerInfo = useMemo(() => {
    if (scenario === "sms-prize")
      return { badge: "S", name: "+62 812-XXXX-XXXX" };
    return { badge: "W", name: "+62 123-4567-XXXX" };
  }, [scenario]);

  return {
    open,
    scenario,
    overlayOpen,
    togglePanel,
    openScenario,
    onAttachmentClick,
    closeOverlay,
    headerInfo,
  };
}

import { useCallback, useMemo, useState } from "react";

export function useThreatSimulate() {
  const [open, setOpen] = useState(false);
  const [scenario, setScenario] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [phishingOverlayOpen, setPhishingOverlayOpen] = useState(false);
  const [smsOverlayOpen, setSmsOverlayOpen] = useState(false);

  const togglePanel = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const openScenario = useCallback((type) => {
    setOpen(true);
    setScenario(type);
    setOverlayOpen(false);
    setPhishingOverlayOpen(false);
    setSmsOverlayOpen(false);
  }, []);

  const onAttachmentClick = useCallback(() => {
    if (scenario === "email-phishing") {
      setPhishingOverlayOpen(true);
    } else if (scenario === "sms-prize") {
      setSmsOverlayOpen(true);
    } else {
      setOverlayOpen(true);
    }
  }, [scenario]);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
    setPhishingOverlayOpen(false);
    setSmsOverlayOpen(false);
  }, []);

  const headerInfo = useMemo(() => {
    if (scenario === "sms-prize")
      return { badge: "S", name: "+62 812-XXXX-XXXX" };
    return { badge: "W", name: "+62 123-4567-XXXX" };
  }, [scenario]);

  return {
    open,
    scenario,
    overlayOpen,
    phishingOverlayOpen,
    smsOverlayOpen,
    togglePanel,
    openScenario,
    onAttachmentClick,
    closeOverlay,
    headerInfo,
  };
}

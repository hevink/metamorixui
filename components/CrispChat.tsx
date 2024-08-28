"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = (): null => {
  const pathname = usePathname();

  const crispId = process.env.NEXT_PUBLIC_CRISP_ID;

  useEffect(() => {
    if (crispId) {
      Crisp.configure(crispId);
    }
  }, [crispId, pathname]);

  return null;
};

export default CrispChat;

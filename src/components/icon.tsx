"use client";

import dynamic from "next/dynamic";

export const Icon = dynamic(
  () => import("@iconify-icon/react").then((m) => m.Icon),
  {
    ssr: false,
  }
);

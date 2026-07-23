"use client";

import dynamic from "next/dynamic";

const OrganicTrail = dynamic(() => import("@/components/OrganicTrail"), {
  ssr: false,
});

export default function OrganicTrailWrapper() {
  return <OrganicTrail />;
}

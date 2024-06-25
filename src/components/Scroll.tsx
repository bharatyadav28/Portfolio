"use client";

import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

const Scroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const hash = url.split("#")[1];
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Listen for route changes
    router.events.on("hashChangeComplete", handleRouteChange);
    handleRouteChange(router.asPath); // Handle initial hash on first load

    // Cleanup
    return () => {
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router]);

  return <div>{children}</div>;
};

export default Scroll;

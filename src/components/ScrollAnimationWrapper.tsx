"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Footer
      gsap.from("footer", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });

      // Section
      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}

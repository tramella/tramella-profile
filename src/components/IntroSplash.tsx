"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function IntroSplash({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // gọi callback khi xong intro
        onFinish();
      },
    });

    tl
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      )
      .to(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.in",
        delay: 1,
      })
      .to(containerRef.current, { opacity: 0, duration: 0.8 }, "-=0.5");
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
    >
      <div ref={logoRef} className="text-4xl font-bold">
       <Image src="https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843750/TRAMELLA_za6nmv.png" alt="Logo" width={480} height={260} />
      </div>
    </div>
  );
}

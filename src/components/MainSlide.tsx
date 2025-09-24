"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactButton from "./ContactButton";

gsap.registerPlugin(ScrollTrigger);

export default function MainSlide() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
        scrollTrigger: {
          trigger: ".main-slide", // target container
          start: "top 80%", // khi phần tử vào viewport
        },
      });

      tl.from(".intro-hello", { y: -30, opacity: 0 })
        .from(".intro-fullstack", { x: -80, opacity: 0 }, "-=0.5")
        .from(".intro-avatar", { y: 100, opacity: 0 }, "-=0.5")
        .from(".intro-developer", { x: 80, opacity: 0 }, "-=0.5")
        .from(".intro-desc", { y: 40, opacity: 0 })
        .from(".intro-btn", { scale: 0.5, opacity: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full main-slide">
      <div className="w-[80%] mx-auto py-5">
        <div className="w-full flex flex-col justify-start">
          <div
            className="intro-hello w-full text-center text-md font-medium mt-3 md:mt-5 xl:text-lg xl:italic"
            style={{ fontFamily: "'Pacifico', sans-serif" }}
          >
            Hello! I'm Tramella
          </div>
          <div className="intro-fullstack w-full text-start text-6xl xl:text-8xl md:text-8xl font-normal tracking-tighter md:tracking-normal">
            FULLSTACK +
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-4">
            <div className="intro-avatar grid-cols-1 row-span-2">
              <div className="w-full flex justify-center items-end">
                <Image
                  src="https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843751/avatar_z46urp.jpg"
                  alt="Avatar"
                  width={300}
                  height={360}
                  className="object-cover w-[270px] h-[320px] rounded-2xl mt-2 md:mt-10"
                />
              </div>
            </div>
            <div className="intro-developer w-full text-end text-6xl xl:text-8xl md:text-8xl font-normal tracking-tighter md:tracking-normal">
              DEVELOPER
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] xl:grid-cols-[1.7fr_1fr] gap-x-25 gap-y-5">
              <div className="intro-desc text-justify text-xs md:text-sm xl:text-base">
                A visionary Fullstack Developer who creates seamless digital
                experiences, blending design, performance, and storytelling into
                every project
              </div>
              <div className="intro-btn w-full flex justify-center md:justify-start">
                <ContactButton className="h-10 xl:h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import ContactForm from "@/components/ContactForm";
import Project from "@/components/Project";
import "../styles/shine.css";
import WhyUs from "@/components/WhyUs";
import Skills from "@/components/Skills";
import MainSlide from "@/components/MainSlide";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import IntroSplash from "@/components/IntroSplash";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sections = useRef<HTMLDivElement[]>([]);
  const [introDone, setIntroDone] = useState(false);

  // hàm callback để gán ref vào mảng mà không reset
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  useEffect(() => {
    sections.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {!introDone && <IntroSplash onFinish={() => setIntroDone(true)} />}

      <div
        className={`w-full transition-opacity duration-700 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={addToRefs} className="animate-on-scroll">
          <MainSlide />
        </div>
        <div ref={addToRefs} className="animate-on-scroll">
          <Skills />
        </div>
        <div ref={addToRefs} className="animate-on-scroll">
          <WhyUs />
        </div>
        <div ref={addToRefs} className="animate-on-scroll">
          <Project />
        </div>
        <div ref={addToRefs} className="animate-on-scroll">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full  bg-white border border-gray-100 text-gray-400 hover:text-gray-600 shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} size="xs"/>
    </button>
  );
}

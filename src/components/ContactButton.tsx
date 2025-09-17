import React from "react";
import styles from "./ContactButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";

interface ContactButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({
   text = "Contact Me",
   onClick,
   className = "",
}: ContactButtonProps){
   return (
      <button
      onClick={onClick}
      className={`${styles["btn-contact"]} ${className}`}
    >
      <div className={`${styles["txt-contact"]}`}>{text}</div>
      <div className={`ml-2 inline-block -rotate-45 ${styles["icon-contact"]}`}>
         <FontAwesomeIcon icon={faArrowRight} className={`${styles["arrow-contact"]}`}/>
      </div>
    </button>
   )
}
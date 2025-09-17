// src/lib/fontawesome.ts
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // tắt auto add CSS để Next.js không bị duplicate

library.add(faEnvelope, faPhone);

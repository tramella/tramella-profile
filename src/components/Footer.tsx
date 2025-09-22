"use client";
import Link from "next/link";
import ContactButton from "./ContactButton";
import Image from "next/image";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {db} from "../libs/firebase"
import {doc, getDoc} from 'firebase/firestore'
import { useEffect, useState } from "react";



export default function Footer(){
  interface FooterItem {
  icon: string;
  platform: string;
  url: string;
  }
  const [socialLinks, setSocialLinks] = useState<FooterItem[]>([]);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchFooter = async () => {
      const footerDocRef = doc(db, "profile/me/sections/footer");
      const footerSnap = await getDoc(footerDocRef);
      if (footerSnap.exists()) {
        const data = footerSnap.data();
        setSocialLinks(data.links || []);
        setEmail(data.email || "");
      }
    };
    fetchFooter();
  }, []);
  

   return (
     <footer className="w-full mt-5 md:mt-10 xl:mt-15">
       <div className="w-[80%] mx-auto">
         <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="flex flex-col justify-start items-start">
             <div className="text-4xl md:text-5xl xl:text-6xl font-bold md:pe-8 mb-7">
               HAVE ANY PROJECT IDEACONTACT WITH ME
             </div>
             <ContactButton />
           </div>
           <div className="flex flex-col md:flex-row justify-between items-start">
             <div className="flex md:flex-col justify-start  items-start mt-5 md:mt-0">
               <div className="flex flex-col justify-start items-start space-y-3">
                 <div className="font-bold text-sm xl:text-base">MAIN PAGES</div>
                 <Link href="/" className="hover:text-gray-700 text-xs xl:text-sm">
                   Home
                 </Link>
                 <Link href="/about" className="hover:text-gray-700 text-xs xl:text-sm">
                   About
                 </Link>
                 <Link href="/projects" className="hover:text-gray-700 text-xs xl:text-sm">
                   Projects
                 </Link>
               </div>
               <div className="flex flex-col justify-start items-start space-y-3 ms-10 md:ms-0 md:mt-10">
                 <div className="font-bold text-sm xl:text-base">MORE PAGES</div>
                 <Link href="/" className="hover:text-gray-700 text-xs xl:text-sm">
                   Blog
                 </Link>
                 <Link href="/about" className="hover:text-gray-700 text-xs xl:text-sm">
                   Contact
                 </Link>
               </div>
             </div>
             <div className="flex flex-col justify-start items-start  mt-10 md:mt-0">
               <div className="flex flex-col justify-start items-start mb-10">
                 <div className="border-s-3 border-l-black ps-3 text-sm font-medium py-1  xl:text-base xl:font-bold">
                   You can also find me on:
                 </div>
                 <div className="flex justify-between items-center mt-4 space-x-4">
                   {socialLinks.map((item, idx) => (
                     <a
                       key={idx}
                       href={item.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="relative group w-13 h-13 xl:w-15 xl:h-15 rounded-full"
                     >
                       <div className="shine-hover w-full h-full rounded-full overflow-hidden relative">
                          <div className="absolute inset-0 flex justify-center items-center bg-white border border-gray-200 rounded-full cursor-pointer">
                            <Image src={item.icon} alt={item.platform} width={28} height={28} className="xl:w-6 xl:h-6"/>
                          </div>
                        </div>

                        {/* Tooltip */}
                        <span className="absolute top-[110%] mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity capitalize">
                           {item.platform}
                        </span>
                     </a>
                   ))}
                 </div>
               </div>
               <div className="flex flex-col justify-start items-start">
                 <div className="border-s-3 border-l-black ps-3 text-sm font-medium py-1 xl:text-base xl:font-bold">
                   Or reach me directly at:
                 </div>
                 {email && (
                  <a href={`mailto:${email}`} className="mt-5 flex justify-start items-center">
                    <FontAwesomeIcon icon={faEnvelopeRegular} className="text-xl"/>
                   <div className="text-sm md:text-base text-gray-500 font-light ms-3 cursor-pointer italic underline shine-hover">
                     {email}
                   </div>
                  </a>
                 )}
               </div>
             </div>
           </div>
         </div>
         <div className="py-4 border-t border-gray-200 text-xs text-gray-600 text-center xl:text-sm">
           Copyright © Tramella Tran. All Rights Reserved
         </div>
       </div>
     </footer>
   );
}
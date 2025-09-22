"use client";
import Image from "next/image";
import ContactButton from "./ContactButton";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { db } from "../libs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function Header(){
   const [logo, setLogo] = useState("");
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
    const fetchHeaders = async () => {
      try {
        const docRef = doc(db, "profile/me/sections/headers");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLogo(data.logo || []);
        }
      } catch (error) {
        console.error("Error fetching headers:", error);
      }
    };

    fetchHeaders();
  }, []);
   return (
     <header className="w-full">
       <div className="w-[80%] mx-auto py-1">
         <div className="w-full flex justify-between">
           <Link href="/">{logo && <Image src={logo} alt="Logo" width={180} height={80} />}</Link>
           <div className="hidden md:flex flex-1 justify-center">
             <Menu className="justify-center items-center space-x-7" />
           </div>
           <div className="hidden md:block">
             <ContactButton onClick={() => alert('Clicked!')} />
           </div>

           {/* Hamburger menu (mobile) */}
           <button
             className="md:hidden text-xl text-gray-800 cursor-pointer"
             onClick={() => setMenuOpen(!menuOpen)}
           >
             <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
           </button>
           {/* Mobile menu overlay */}
           <div
             className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                     ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
           >
             <div className="flex justify-end p-4">
               <button onClick={() => setMenuOpen(false)} className="text-xl cursor-pointer">
                 <FontAwesomeIcon icon={faXmark} />
               </button>
             </div>
             <div className="flex flex-col items-center mt-6 space-y-6">
               <Menu className="w-[70%] mx-auto flex-col items-center space-y-6" />
               <ContactButton onClick={() => alert('Clicked!')} />
             </div>
           </div>

           {/* Overlay background */}
           {menuOpen && (
             <div className="fixed inset-0 bg-black/10 z-40" onClick={() => setMenuOpen(false)} />
           )}
         </div>
       </div>
     </header>
   );
}
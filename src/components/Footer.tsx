import Link from "next/link";
import ContactButton from "./ContactButton";
import Image from "next/image";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer(){
   return (
     <footer className="w-full">
       <div className="w-[80%] mx-auto">
         <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="flex flex-col justify-start items-start">
             <div className="text-4xl md:text-5xl font-bold md:pe-8 mb-7">
               HAVE ANY PROJECT IDEACONTACT WITH ME
             </div>
             <ContactButton />
           </div>
           <div className="flex flex-col md:flex-row justify-between items-start">
             <div className="flex md:flex-col justify-start  items-start mt-5 md:mt-0">
               <div className="flex flex-col justify-start items-start space-y-3">
                 <div className="font-bold text-sm">MAIN PAGES</div>
                 <Link href="/" className="hover:text-gray-700 text-xs">
                   Home
                 </Link>
                 <Link href="/about" className="hover:text-gray-700 text-xs">
                   About
                 </Link>
                 <Link href="/projects" className="hover:text-gray-700 text-xs">
                   Projects
                 </Link>
               </div>
               <div className="flex flex-col justify-start items-start space-y-3 ms-10 md:ms-0 md:mt-10">
                 <div className="font-bold text-sm">MORE PAGES</div>
                 <Link href="/" className="hover:text-gray-700 text-xs">
                   Blog
                 </Link>
                 <Link href="/about" className="hover:text-gray-700 text-xs">
                   Contact
                 </Link>
               </div>
             </div>
             <div className="flex flex-col justify-start items-start  mt-10 md:mt-0">
               <div className="flex flex-col justify-start items-start mb-10">
                 <div className="border-s-3 border-l-black ps-3 text-sm font-medium py-1">
                   You can also find me on:
                 </div>
                 <div className="flex justify-between items-center mt-4 space-x-4">
                   <div className="w-12 h-12 shine-hover rounded-full">
                     <div className="w-full h-full rounded-full bg-white border border-gray-200 flex justify-center items-center cursor-pointer">
                       <Image
                         src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843748/GitHub_fdvoju.png`}
                         alt="github"
                         width={28}
                         height={28}
                       />
                     </div>
                   </div>
                   <div className="w-12 h-12 shine-hover rounded-full">
                     <div className="w-full h-full rounded-full bg-white border border-gray-200 flex justify-center items-center cursor-pointer">
                       <Image
                         src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843748/LinkedIn_jxfjtx.png`}
                         alt="linkedin"
                         width={24}
                         height={24}
                       />
                     </div>
                   </div>
                   <div className="w-12 h-12 shine-hover rounded-full">
                     <div className="w-full h-full rounded-full bg-white border border-gray-200 flex justify-center items-center cursor-pointer">
                       <Image
                         src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843747/Facebook_kkwxjh.png`}
                         alt="facebook"
                         width={24}
                         height={24}
                       />
                     </div>
                   </div>
                   <div className="w-12 h-12 shine-hover rounded-full">
                     <div className="w-full h-full rounded-full bg-white border border-gray-200 flex justify-center items-center cursor-pointer">
                       <Image
                         src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843747/Telegram_App_ynbzoq.png`}
                         alt="telegram"
                         width={24}
                         height={24}
                       />
                     </div>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col justify-start items-start">
                 <div className="border-s-3 border-l-black ps-3 text-sm font-medium py-1">
                   Or reach me directly at:
                 </div>
                 <div className="mt-5 flex justify-start items-center">
                   <FontAwesomeIcon icon={faEnvelopeRegular} />
                   <div className="text-xs text-gray-600 font-medium ms-3 cursor-pointer">
                     trantramella@gmail.com
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="py-4 border-t border-gray-200 text-xs text-gray-600 text-center">
           Copyright © Tramella Tran. All Rights Reserved
         </div>
       </div>
     </footer>
   );
}
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
   return (
     <div className="w-full">
       <div className="w-[80%] mx-auto py-10 flex flex-col justify-start items-start">
         <div className="w-full relative flex justify-start items-end">
           <div className="font-bold text-5xl md:text-6xl xl:text-6xl">PROJECTS</div>
           <Link href="/projects" className="text-xs absolute right-2 top-9 hidden md:block">More  <FontAwesomeIcon icon={faArrowRight}/></Link>
         </div>
         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-10 mb-5">
           <div className="w-full flex flex-col justify-start items-start">
             <Image
               src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843750/profile-project-mockup_bweinb.png`}
               alt="Logo"
               width={600}
               height={370}
               className="object-cover w-full h-[300px] md:h-[370px]"
             />
             <p className="text-xs text-gray-600 py-3 text-justify">Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.</p>
             <p className="text-xs text-gray-600 py-1 mb-2 text-start font-bold"><span>Technology: </span></p>
             <button className="shine-hover flex justify-between items-baseline text-gray-500 border border-gray-800 px-4 py-2 md:py-3 cursor-pointer text-sm">View Project <FontAwesomeIcon icon={faArrowRight}  className="text-xs ms-2"/></button>
           </div>
          <div className="w-full flex flex-col justify-start items-start">
             <Image
               src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843750/resq-mobile-project_svn1du.png`}
               alt="Logo"
               width={600}
               height={370}
               className="object-cover w-full h-[300px] md:h-[370px]"
             />
             <p className="text-xs text-gray-600 py-3 text-justify">Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.</p>
            <button className="shine-hover flex justify-between items-baseline text-gray-500 border border-gray-800 px-4 py-2 md:py-3 cursor-pointer text-sm">View Project <FontAwesomeIcon icon={faArrowRight}  className="text-xs ms-2"/></button>
           </div>
          <div className="w-full flex flex-col justify-start items-start">
             <Image
               src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843749/yoggo-project_gqxak1.png`}
               alt="Logo"
               width={600}
               height={370}
               className="object-cover w-full h-[300px] md:h-[370px]"
             />
             <p className="text-xs text-gray-600 py-3 text-justify">Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.</p>
             <button className="shine-hover flex justify-between items-baseline text-gray-500 border border-gray-800 px-4 py-2 md:py-3 cursor-pointer text-sm">View Project <FontAwesomeIcon icon={faArrowRight}  className="text-xs ms-2"/></button>
           </div>
           <div className="w-full flex flex-col justify-start items-start">
             <Image
               src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843750/resq-web-project_se3tjy.png`}
               alt="Logo"
               width={600}
               height={370}
               className="object-cover w-full h-[300px] md:h-[370px]"
             />
             <p className="text-xs text-gray-600 py-3 text-justify">Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.</p>
             <button className="shine-hover flex justify-between items-baseline text-gray-500 border border-gray-800 px-4 py-2 md:py-3 cursor-pointer text-sm">View Project <FontAwesomeIcon icon={faArrowRight}  className="text-xs ms-2"/></button>
           </div>
         </div>
       </div>
     </div>
   );
};

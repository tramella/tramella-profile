"use client";
import Image from "next/image";
import { db } from "../libs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

type Skill = {
  img: string;
  name: string;
  type: string;
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const docRef = doc(db, "profile/me/sections/skills");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setSkills(data.list || []);
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  // hàm render block
  const renderSkills = (title: string, type: string) => {
    const filtered = skills.filter((s) => s.type === type);
    return (
      <div className="flex flex-col justify-start items-start">
        <div className="border-s-3 border-l-black ps-2 text-md font-bold py-1 mt-3">
          {title}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 mt-5">
          {filtered.map((skill, index) => (
            <div
              key={index}
              className="group relative border border-gray-300 rounded-lg w-11 h-11 xl:h-13 xl:w-13 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={80}
                height={80}
                className="w-4 h-4 xl:w-5 xl:h-5 object-cover"
              />
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-4 py-1 rounded-md bg-white border border-gray-300 text-gray-500 font-medium text-xs whitespace-nowrap">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-10">
      <div className="w-[80%] mx-auto py-10 flex flex-col justify-start items-start">
        <div className="w-full relative flex justify-start items-end">
          <div className="font-bold text-5xl md:text-6xl xl:mb-3 xl:text-6xl">SKILLS</div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] md:gap-x-18 xl:gap-x-18 gap-y-10">
          {renderSkills("Front-end", "fe")}
          {renderSkills("Back-end", "be")}
          {renderSkills("Database", "db")}
          {renderSkills("Tools", "tool")}
          {renderSkills("UI/UX", "ui")}
        </div>
      </div>
    </div>
  );
}

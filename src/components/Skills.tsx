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
      <div className="flex flex-col justify-start items-start mb-10">
        <div className="border-s-3 border-l-black ps-2 text-md font-bold py-1 mt-3">
          {title}
        </div>
        <div className="flex justify-start items-center gap-x-8 gap-y-4 flex-wrap mt-5">
          {filtered.map((skill, index) => (
            <div
              key={index}
              className="group relative border border-gray-300 rounded-lg w-11 h-11 flex justify-center items-center cursor-pointer"
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={80}
                height={80}
                className="w-4 h-4 object-cover"
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
    <div className="w-full">
      <div className="w-[80%] mx-auto py-10 flex flex-col justify-start items-start">
        <div className="w-full relative flex justify-start items-end">
          <div className="font-bold text-5xl md:text-6xl">SKILLS</div>
        </div>
        <div className="w-full grid grid-cols-1  md:grid-cols-[1.5fr_1fr_1fr] gap-x-10 gap-y-3">
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

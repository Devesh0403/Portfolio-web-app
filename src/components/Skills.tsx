import React from 'react'

import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";



const Skills = () => {
  // Skills data with names and logos
  const skillsData = [
    { name: 'React', logo: <FaReact size={50} /> },
    { name: 'Node.Js', logo: <RiNodejsLine size={50} /> },
    { name: 'TypeScript', logo: <TbBrandTypescript size={50} /> },
    { name: 'Tailwind', logo: <RiTailwindCssFill size={50} /> },
    { name: 'Express', logo: <SiExpress size={50} /> },
    { name: 'MongoDB', logo: <SiMongodb size={50} /> },
    { name: 'JavaScript', logo: <IoLogoJavascript size={50} /> },
    { name: 'HTML', logo: <FaHtml5 size={50} /> },
    { name: 'CSS', logo: <FaCss3Alt size={50} /> },
    { name: 'C++', logo: <TbBrandCpp size={50} /> },
    { name: 'Python', logo: <FaPython size={50} /> },
    { name: 'JQuery', logo: <DiJqueryLogo size={50} /> },
    { name: 'Figma', logo: <FaFigma size={50} /> },
    { name: 'Postgres', logo: <BiLogoPostgresql size={50} /> },
    {name:'Github',logo:<FaGithub size={50} /> } ,
    {name: 'Canva', logo: <SiCanva size={50} /> }
   
  ]

  return (
    <div className="mx-auto flex flex-col w-[60%] font-rubik ">
      {/* Heading */}
      <div className="px-[50px] sm:px-[75px] text-2xl md:text-4xl tracking-wider mob1:text-base mb-[3rem] md:text-md font-semibold text-center pt-10  ">
        My Tech Stack
      </div>

      

      {/* Skills grid */}
      <div className="px-[30px] grid grid-cols-3 sm:grid-cols-4 gap-8 justify-center items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 py-3 rounded-lg  border items-center justify-center  transition-transform duration-200 hover:scale-110"
          >
            {skill.logo}
            <div className="text-s xs:text-sm hidden md:block">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

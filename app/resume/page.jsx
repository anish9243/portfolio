"use client";

import { ImportIcon, ListOrdered } from 'lucide-react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaJsSquare, FaGithub, FaAws, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiCsharp, SiMysql } from 'react-icons/si'


//about data

const about = {
  title: 'About Me',
  description: 'An experienced web developer passionate about crafting impactful digital solutions and bringing innovative designs to life.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anish Patel"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 437-933-8739"
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years"
    },
    {
      fieldName: "Email",
      fieldValue: "ravipatel9243@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "LinkdIn",
      fieldValue: "www.linkedin.com/in/anish1507"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'A journey of transforming innovative ideas into impactful digital solutions across diverse development roles and experiences.',
  items: [
    {
      company: "Tech Innovators Inc.",
      position: "Full Stack Developer",
      duration: "June-2022 - August-2023",
    },
    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "January-2021 - May-2023",
    },
    {
      company: "Wit Solution",
      position: "Web Developer Intern",
      duration: "January-2020 - July-2020",
    },
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Passionate about developing innovative web solutions and continuously expanding my knowledge in the field of web development.',
  items: [
    {
      institute: "Humber College",
      degree: "Web Devlopment Post Graduation Degree",
      duration: "January-2024 - December-2024",
    },
    {
      institute: "Swarnim Starup and Innovatoion University",
      degree: "B.Tech in Computer Engineering",
      duration: "Completed in 2023",
    },
  ]
};

//skills data   
const skills = {
  title: "My Skills",
  description: "Experienced in web development with expertise in modern technologies, tools, and frameworks for impactful solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "nodse.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiCsharp />,
      name: "c#",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },

  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} 
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className=" min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">      {experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return <li key={index} className="bg-[#232329] h-[184px] py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">      {education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return <li key={index} className="bg-[#232329] h-[184px] py-10 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.institute}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30PX] ">
                  {skills.skillList.map((skill, index)=> {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>

                    );
                  })} 
                </ul>
              </div>
            
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-4 pe-4">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex justify-between w-full border-b py-2 border-b-white/20">
                          <span>{item.fieldName}</span>
                          <span className="font-medium">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
};

export default Resume

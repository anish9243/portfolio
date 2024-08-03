"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'


//about data

const about = {
  title: 'About Me',
  discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.Lorem ipsum dolor sit.',
  infp: [
    {
      fieldName: "Name",
      fieldValue: "Anish Patel"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 437-933-8739"
    },
    {
      fieldName: "Email",
      fieldValue: "anishpatel.1824004019@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "7+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "LinkdIn",
      fieldValue: "anish1507"
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
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.Lorem ipsum dolor sit.',
  items: [
    {
      company: "Tech Innovators Inc.",
      position: "Full Stack Developer",
      duration: "June-2022 - August-2023",
    },
    {
      company: "Freelance",
      position: "Freelance",
      duration: "January-2021 - May-2023",
    },
    {
      company: "Wit Solution",
      position: "Web Developer Intern",
      duration: "January-2020 - July-2020",
    },
  ]
}

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.Lorem ipsum dolor sit.',
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
}
const Resume = () => {
  return (
    <div className=" container mx-auto">
      resume page
    </div>
  )
};

export default Resume

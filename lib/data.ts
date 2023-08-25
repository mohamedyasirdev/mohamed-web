import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCartPlus, FaDesktop, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Information Technology at a University Of Kassala",
    location: "Sudan, Kassala",
    description:
      "I Am Studying The Development And Support Of Computer Systems On The Internet. I Started My Academic Career At The Beginning Of 2021.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Now",
  },
  {
    title: "Web Developer",
    location: "Sudan, FL",
    description:
      "I Work As A Web Developer To Create Websites That Serve The Client And Help Brands Appear On The Internet.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Now",
  },
  {
    title: "UI & User Exper..",
    location: "Sudan, Kassala",
    description:
      "I Work To Design The Best User Experience To Ensure The Ease And Beauty Of The Site, Before Diving Into Writing The Website's Code.",
    icon: React.createElement(FaDesktop),
    date: "2022 - Now",
  },
] as const;

export const projectsData = [
  {
    title: "eLana Shop",
    description:
      "We launched the first version this year, which is a brand that specializes in skin care products.",
    tags: ["Skitch", "UI&UX", "Design Code", "e-Commerce", "Website"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Design Shop",
    description:
      "With the new challenges facing projects when launching them, we found a radical solution to launch random and not beautiful versions of non-specialists.",
    tags: ["nqo", "Use Buw", "Api", "e-commerce", "website"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Nova Plus",
    description:
      "It is a completely free online community that was built with love to launch a beautiful replica, with the aim of reaching the maximum level of user comfort.",
    tags: ["js",  "SQL", "Development", "Design"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JS",
  "esbuild",
  "Command Line",
  "nueo X",
  "pug.js Engine",
  "Gulp.js",
  "EX Bootstrap",
  "EX Sass",
  "Codesign",
  "Jest",
  "MD DaisyUl",
  "MD Design",
  "Basic Canva",
  "Basic illustrator",
] as const;

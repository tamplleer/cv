import { IconType } from "@cv/ui-components";

import { TechStackType } from "../src/elements/StackElement";

type ProjectType = "frontend" | "mobile" | "backend" | "fullstack" | "internal";

type CustomerType = "Заказная 🇷🇺" | "Заказная 🇪🇸" | "Заказная 🇯🇴" | "внутренняя" | "Внутренняя разработка";

export type Link = {
  name: string;
  link: string;
  icon: IconType;
};

type MainInfo = {
  name: string;
  title: string;
  location: string;
  links: Link[];
};

export type EducationType = {
  name: string;
  faculty: string;
  image: string;
  link: string;
  time: string; // например, "2018 – 2022"
};

type WorkTime = {
  from: string; // ISO "YYYY-MM-DD" или "present"
  to: string;  // ISO "YYYY-MM-DD" или "present"
};

export type ExperienceType = {
  name: string;
  link: string;
  position: string;
  image: string;
  description: string;
  workTime: WorkTime;
};

export type AchievementType = {
  name: string;
  date: string; // ISO "YYYY-MM-DD"
  link: string;
  image: string;
  description: string;
};

export type ProjectItemType = {
  name: string;
  description: string;
  stack: TechStackType[];
  image: string;
  link: string;
  tasks: string[];
  role: string;
  team: string | number;
  duration: string;
  type: ProjectType;
  customer: CustomerType;
  visible?: boolean;
};

export type Resume = {
  mainInfo: MainInfo;
  aboutMe: { more: string, simple: string };
  achievements: AchievementType[];
  education: EducationType[];
  experiences: ExperienceType[];
  projects: ProjectItemType[];
  stack: TechStackType[];
};

import { useEffect, useRef, useState } from "react";

import { Box, CardSimple, Chip, Text } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { ProjectItemType } from "../../api/models";
import { BlockLayout } from "../BlockLayout";
import { StackElement } from "../elements/StackElement";


enum typesProjectEnum {
  frontend = "Frontend",
  mobile = "Mobile",
  all = "All",
}

type TypesProject = keyof typeof typesProjectEnum;


export const ProjectList = () => {
  const [filter, setFilter] = useState<TypesProject>("frontend");
  const { data } = useGetCvData();

  return <BlockLayout id={"projects"} header={"Projects"}>
    <Box className={"gap-4 w-full"} flexDirection={"col"}>
      <FilterProjectTabsFlat filter={filter} setFilter={setFilter} />
      {data.projects.filter(f => (f.type === filter || filter === "all") && f?.visible !== false).map(value => <Project
        project={value} />)}
    </Box>
  </BlockLayout>;
};


const Project = ({ project }: { project: ProjectItemType }) => {//todo fix any
  const [showMore, setShowMore] = useState(false);
  const baseCardRef = useRef<HTMLDivElement | null>(null);
  const descriptionCardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  }, [descriptionCardRef.current?.clientHeight]);
  return <div
    style={{ paddingBottom: showMore ? `${descriptionCardRef.current?.clientHeight ?? 40}px` : "0px" }}
    className={`overflow-hidden transition-all duration-500 relative`}>
    <CardSimple inref={baseCardRef}
                className={`text-start w-full h-min-[4rem] group relative overflow-hidden min-h-[230px] flex flex-col`}>
      <Box flexDirection={"col"} className={"items-start text-start gap-2"}>
        <Box justifyContent={"between"} className={"w-full"}>
          <Box flexDirection={"col"} gap={4}>
            <Box flexDirection={"col"} gap={4}>
              <Text variant={"h3"}>{project.name}</Text>
              {/*  <Text variant={"body3"}>{project.customer}</Text>*/}
            </Box>
            <Box gap={2} className={"opacity-fade-in"} wrap={"wrap"}>

              {project.stack.map((item, index) => (
                <StackElement key={index} icon={item} />
              ))}
            </Box>
          </Box>
          <Box className={"text-end xxs:hidden"} alignItems={"baseline"} gap={4}>
            {/* <Text variant={"h6"}>{project.customer}</Text>*/}
            <Chip color={"neutralSelected"} label={project.role} />
            <Chip color={"neutralSelected"} label={project.duration} />

            {/*<Text variant={"body4"}>{"Роль: "}</Text>*/}
            {/* <Text variant={"h6"}>{project.role}</Text>*/}
          </Box>
        </Box>
      </Box>
      <Box flexDirection={"col"} className={"xxs:w-full gap-5 w-[60%] pt-2 flex-1 justify-between"}>
        <Text className={""} variant={"body3"}>{project.description}</Text>
        <Box justifyContent={"between"}>
          <button onClick={() => setShowMore(prev => !prev)} color={"primary"}>Задачи <span
            className={`inline-block transition-transform duration-500 transform ${
              showMore ? "-rotate-180" : "rotate-0"
            }`}
          >
    ↓
  </span>
          </button>
          <Box className={"text-end hidden xxs:flex"} alignItems={"baseline"} gap={4}>
            {/* <Text variant={"h6"}>{project.customer}</Text>*/}
            <Chip color={"neutralSelected"} label={project.role} />
            <Chip color={"neutralSelected"} label={project.duration} />

            {/*<Text variant={"body4"}>{"Роль: "}</Text>*/}
            {/* <Text variant={"h6"}>{project.role}</Text>*/}
          </Box>
          {/* <Box gap={4}>
            <Chip>{`${project.team} 👷`}</Chip>
            <Chip color={"neutralSelected"} label={project.role} />

          </Box>*/}

        </Box>
      </Box>
      <img
        src={project.image?.length ? project.image : "mock.webp"} alt="logo"
        className={`xxs:hidden absolute bottom-0 right-[-10%] shadow-2xl rounded-t-xl z-10 h-44 w-80 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2`} />
    </CardSimple>
    <div ref={descriptionCardRef}
         style={{
           top: showMore ? `${(baseCardRef.current?.clientHeight ?? 40) - 20}px` : "0px",
           opacity: showMore ? "100%" : "0%",
         }}
         className={`xxs:w-full w-[60%] xxs:pr-0 -z-10 pr-8 transition-all ease-in-out duration-500 absolute`}>
      <CardSimple className={"rounded-t-none"}>
        <Box className={"text-start pt-4 pl-4"}>
          <ul className={"gap-4 flex flex-col list-disc"}>{project.tasks.map(v => <li><Text variant={"body3"}>{v}</Text>
            </li>,
          )}</ul>
        </Box>
      </CardSimple>
    </div>
  </div>;
};

const FilterProjectTabs = ({ filter, setFilter }: { filter: TypesProject, setFilter: (v: TypesProject) => void }) => {
  return <Box gap={4}>
    {Object.entries(typesProjectEnum).map(([key, title]) => <button
      onClick={() => setFilter(key as TypesProject)}>
      <Chip animate={"selected"} size={"m"} label={title}
            className={`cursor-pointer`}
            color={key === filter ? "neutralSelected" : "neutral"}
      />
    </button>)}
  </Box>;
};

const FilterProjectTabsFlat = ({ filter, setFilter }: {
  filter: TypesProject,
  setFilter: (v: TypesProject) => void
}) => {
  return <Box gap={4} className={"bg-neutral-50 w-fit rounded-xl p-2"}>
    {Object.entries(typesProjectEnum).map(([key, title]) => <button
      onClick={() => setFilter(key as TypesProject)}>
      <div
        className={"flex flex-nowrap flex-row content-center justify-center" +
          " items-center gap-4 font-normal text-center " +
          " rounded-xl px-2.5 py-2 min-w-12 hover:scale-105 active:scale-95" +
          ` transition-transform duration-200 ease-in-out cursor-pointer ${key === filter ? "shadow-xl bg-neutral-0 text-neutral-900" : "bg-none text-neutral-300"}`}
      >
        {title}
      </div>
    </button>)}
  </Box>;
};

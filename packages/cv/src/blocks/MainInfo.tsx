import { Box, Icon, Image, Text, useUIContext } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { Link } from "../../api/models";
import { workDurationString } from "../sub/WorkDuration";


export const MainInfo = () => {
  const { data: { mainInfo } } = useGetCvData();
  const { theme } = useUIContext();

  return <>
    <Box flexDirection={"row"} gap={4} className={"s:hidden font-jura w-full"} justifyContent={"between"} alignItems={"center"}>
        <Box className={"text-start"} flexDirection={"col"} justifyContent={"start"} gap={2}>
          <Text variant={"h2"} className={"!font-jura"}>{mainInfo.name} </Text>
          <Text variant={"h3"}>{mainInfo.title}</Text>
          <Text variant={"body1"}>Опыт работы: {workDurationString()}</Text>
          <Location location={mainInfo.location} />
          <Links links={mainInfo.links} />
        </Box>
        <Image
          className={"object-cover aspect-auto rounded-[30px] w-[100px]"}
          alt="face"
          src={`photo_${theme}.webp`}
        />
    </Box>
    <Box flexDirection={"row"} gap={4} justifyContent={"between"} className={"xxs:hidden font-jura"}>
      <Box className={"text-start"} flexDirection={"col"} justifyContent={"start"} gap={2}>

        <Box gap={2}>
          <Text variant={"h1"} className={"!font-jura pb-4"}>{mainInfo.name} </Text>
          {/*<MyStatus />*/}
        </Box>
        <Text variant={"h2"}>{mainInfo.title} <span
          className={"font-normal text-h3 text-neutral-800"}> — Опыт {workDurationString()}</span></Text>
        {/*<Text variant={"body1"}>Опыт работы: {workDurationString()}</Text>*/}
        <Location location={mainInfo.location} />
        <Links links={mainInfo.links} />
      </Box>
      <Box>
        <Image
          className={"object-cover aspect-auto rounded-[50px] w-[200px]"}
          alt="face"
          src={`photo_${theme}.webp`}
        />
      </Box>
    </Box></>;
};

export const StylishMainInfo = () => {
  return <div>
    <div
      className="masked-image w-full h-[300px]"
      style={{
        maskImage: "url(/mask.svg)",
        WebkitMaskImage: "url(/mask.svg)",
        maskSize: "cover",
        WebkitMaskSize: "cover",
      }}
    >
      <img
        src="avatar.webp"
        alt="Masked"
      />
    </div>
  </div>;
};

const Links = ({ links }: { links: Link[] }) => {
  return <Box gap={2}>
    {links.map((item) => <Box>
      <a href={item.link} key={item.link} className={"flex gap-1"} target="_blank" rel="noopener noreferrer">
        <Icon color={"neutral-900"} icon={item.icon} />
        {item.name ? <Text>{item.name}</Text> : null}
      </a>
    </Box>)}
  </Box>;
};

const Location = ({ location }: { location: string }) => {
  return <Box alignItems={"center"} gap={2}> <Icon color={"neutral-900"} icon={"location"} /> <Text
    variant={"body3"}>{location}</Text>
  </Box>;
};

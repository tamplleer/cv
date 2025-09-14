import { Box, Image, Text } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { BlockLayout } from "../BlockLayout";
import { EducationType } from "../../api/models";


export const Education = () => {
  const { data } = useGetCvData();
  return <BlockLayout header={"Education"}>
    <Box flexDirection={"col"} className={"w-full"} gap={5}>
      {data.education.map((education: EducationType) => <EducationElement education={education} />)}
    </Box>
  </BlockLayout>;
};

const EducationElement = ({ education }: { education: EducationType }) => {
  return <Box className={"w-full"} gap={2}>
    <a href={education.link} target="_blank" rel="noopener noreferrer">
      <Image className={"aspect-square w-20 rounded-xl"} src={education.image} alt={"лого учебной организациия"} />
    </a>
    <Box justifyContent={"between"} className={"text-start w-full"}>
      <Box flexDirection={"col"} gap={1} flex={2}>
        <Text variant={"h5"}>{education.name}</Text>
        <Text weigth={"light"} color={"neutral-400"} variant={"body3"}>{education.faculty}</Text>
      </Box>
      <Text className={"flex-1 text-end"} variant={"h6"}>{education.time}</Text>
    </Box>
  </Box>
    ;
};

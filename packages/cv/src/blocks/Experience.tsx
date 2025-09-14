import { Box, Image, Text } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { ExperienceType } from "../../api/models";
import { BlockLayout } from "../BlockLayout";
import { getDateDifference, getDateDifferenceWithName } from "../sub/WorkDuration";

export const Experience = () => {
  const { data } = useGetCvData();
  return <BlockLayout header={"Experience"} id={"experience"}>
    <Box flexDirection={"col"} gap={6}>{data.experiences.map((experience: ExperienceType) => <ExperienceElement
      experience={experience} />)}</Box>
  </BlockLayout>;
};


const ExperienceElement = ({ experience }: { experience: ExperienceType }) => {
  return <Box className={"w-full"} gap={2}>
    <a href={experience.link} target="_blank" rel="noopener noreferrer">
      <Image className={"aspect-square w-20 rounded-xl"} src={experience.image} alt={"лого учебной организациия"} />
    </a>
      <Box flexDirection={"col"} className={"w-full text-start"} gap={1}>
        <Box justifyContent={"between"}>
          <Box flexDirection={"col"} gap={1}>
            <a href={experience.link}>
              <Text variant={"h5"}>{experience.name}</Text>
            </a>
            <Text variant={"h6"}>{experience.position}</Text>
          </Box>
          <Box flexDirection={"col"} gap={1}>
            <Text
              variant={"h6"}>{getDateDifferenceWithName(checkDate(experience.workTime.from), checkDate(experience.workTime.to))}</Text>
            <Text
              variant={"h6"}>{getDateDifference(checkDate(experience.workTime.from), checkDate(experience.workTime.to))}</Text>
          </Box>

        </Box>
        <Text weigth={"light"} variant={"body3"} color={"neutral-400"}>{experience.description}</Text>
      </Box></Box>
;
};

const checkDate = (stringDate: string) => {
  try {

    if (stringDate === "present") {
      return new Date();
    } else {
      return new Date(stringDate);
    }
  } catch (e) {
    console.error("error: ", e);
    return new Date();
  }
};

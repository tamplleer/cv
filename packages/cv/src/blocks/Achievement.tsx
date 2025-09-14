import { Box, Image, Text } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { AchievementType } from "../../api/models";
import { BlockLayout } from "../BlockLayout";

export const Achievement = () => {
  const { data } = useGetCvData();
  return <BlockLayout header={"Achievement"}>
    {data.achievements.map((achievement: AchievementType) => <AchievementElement achievement={achievement} />)}
  </BlockLayout>;
};

const AchievementElement = ({ achievement }: { achievement: AchievementType }) => {

  return <Box gap={2} className={"w-full"}>
    <a href={achievement.link} target="_blank" rel="noopener noreferrer">
      <Image className={"aspect-square w-20 rounded-xl"} src={achievement.image} alt={"лого события"} />
    </a>
    <Box justifyContent={"between"} className={"text-start w-full"}>
      <Box flexDirection={"col"} gap={2} flex={2}>
        <Text variant={"h5"}>{achievement.name}</Text>
        <Text weigth={"light"} color={"neutral-400"} variant={"body3"}>{achievement.description}</Text>
      </Box>
      <Text className={"flex-1 text-end"} variant={"h6"}>{achievement.date}</Text>
    </Box>

  </Box>;
};

const AchievementBigImageElement = ({ achievement }: { achievement: AchievementType }) => {

  return <Box justifyContent={"between"} className={"text-start w-full"}>
    <Box flexDirection={"col"} gap={2} flex={2}>
      <Text variant={"h5"}>{achievement.name}</Text>
      <Text color={"neutral-500"} variant={"body3"}>{achievement.description}</Text>
    </Box>
    <Text className={"flex-1 text-end"} variant={"h6"}>{achievement.date}</Text>
  </Box>;
};

import { Accordion, Box, Text } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { BlockLayout } from "../BlockLayout";

export const AboutMe = () => {
  const { data } = useGetCvData();
  return <BlockLayout header={"About Me"} id={"aboutMe"}>
    <Box flexDirection={"col"} gap={2}>
    <Text variant={"body1"} className={"text-start whitespace-pre-line"}>{data.aboutMe.simple}</Text>
    <Accordion title={"Подробнее"} content={data.aboutMe.more} />
    </Box>
  </BlockLayout>;
};

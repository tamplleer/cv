import { Box } from "@cv/ui-components";

import { useGetCvData } from "../../api/api";
import { BlockLayout } from "../BlockLayout";
import { StackElement } from "../elements/StackElement";

export const Stack = () => {
  const { data } = useGetCvData();
  return <BlockLayout header={"Stack"} id={"stack"}>
    <Box flexDirection={"row"} gap={4} wrap={"wrap"}>
      {data.stack.map((item, index) => (
          <StackElement key={index} icon={item} isTitle />
      ))}
    </Box>
  </BlockLayout>;
};

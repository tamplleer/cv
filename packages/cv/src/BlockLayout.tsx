import { PropsWithChildren } from "react";

import { Box, Text } from "@cv/ui-components";

export const BlockLayout = ({ children, header, id }: { header: string, id?: string } & PropsWithChildren) => {

  return <Box id={id} alignItems={"start"} gap={6} flexDirection={"col"} className={"w-full"}>
    <a href={`#${id}`}>
      <Text variant={"h2"}>{header}</Text>
    </a>
    {children}
  </Box>;

};

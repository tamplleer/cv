import { Box, Text, ThemeSwitcher } from "@cv/ui-components";

import { AboutMe } from "./blocks/AboutMe";
import { Achievement } from "./blocks/Achievement";
import { Education } from "./blocks/Education";
import { Experience } from "./blocks/Experience";
import { Footer } from "./blocks/Footer";
import { Hobbies } from "./blocks/Hobbies";
import { MainInfo } from "./blocks/MainInfo";
import { Performance } from "./blocks/Performance";
import { ProjectList } from "./blocks/ProjectList";
import { Stack } from "./blocks/Stack";
import { ButtonInvite, ButtonInviteMobile } from "./elements/ButtonInvite";


type CvProps = {
  className?: string;
};

export const Cv = ({ className }: CvProps) => {
  return <Box flexDirection={"row"} className={"relative h-full w-full overflow-auto px-4"} justifyContent={"center"}>
    <LeftSide className={"xs:hidden"} />
    <Box flexDirection={"col"} className={"w-full max-w-[700px] pb-8 xxs:pt-4 s:pt-20"} gap={10}>
      {/* <Animation3d />*/}
      <MainInfo />
     {/* <StylishMainInfo />*/}
      <AboutMe />
      <Stack/>
      <ProjectList />
      <Experience />
      <Education />
      <Achievement />
      <Performance />
      <Hobbies />
      <Technologies />
      <Footer />
    </Box>
    <MobileSide className={"m:hidden fixed bottom-0 left-0 w-full z-10 bg-neutral-0 rounded-xl"} />
    <RightSide className={"xs:hidden"} />
  </Box>;
};

const LeftSide = ({ className }: { className?: string }) => {
  return <Box className={`w-auto flex-1 fixed  left-0 ${className ?? ""}`} alignContent={"center"}>
    <Box flexDirection={"row"} className={"w-full p-4 gap-2"}>
      <Text variant={"h3"} className={"content-around"}
      >Васильев Денис</Text>
      <ThemeSwitcher />
    </Box>

  </Box>;
};
const RightSide = ({ className }: { className?: string }) => {
  return <Box className={`flex-1 w-auto fixed right-0 ${className ?? ""}`} alignContent={"center"} alignItems={"start"}>
    <div className={"p-4 w-full"}>
      <ButtonInvite />
      {/* <Card /><Card2 />*/}</div>
  </Box>;
};
const MobileSide = ({ className }: { className?: string }) => {
  return <Box className={`${className} p-2`} >

    <Box flexDirection={"col"} className={"w-full p-4 gap-2 flex-1"}>
      <ThemeSwitcher />
    </Box>

      <Box className={"flex-2"} alignItems={"center"}>
      <ButtonInviteMobile />
      </Box>

  </Box>;
};
const Technologies = () => {
  return <div>
  </div>;
};




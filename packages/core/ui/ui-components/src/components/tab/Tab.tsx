import { ReactElement } from "react";

import { TabProvider, useTabContext } from "./TabProvider";
import { tabButtonStyle } from "./TabStyle";
import { Box } from "../Box";
import { Text } from "../text/Text";

export type TabType = { id: string; label: string; content: ReactElement };

type TabProps = {
  tabs: TabType[];
  className?: string;
  buttonClassName?: string;
  initialTabId?: string;
  size?: "s" | "m";
};
/**
 * @param tabs
 * @param className
 * @param buttonClassName
 * @param size
 * @param initialTabId
 * @constructor
 */
export const Tab = ({
  tabs,
  className,
  buttonClassName,
  size,
  initialTabId,
}: TabProps) => {
  return (
    <TabProvider tabs={tabs} initialTabId={initialTabId}>
      <TabUi
        className={className}
        buttonClassName={buttonClassName}
        size={size}
      />
    </TabProvider>
  );
};

type TabUiProps = {
  className?: string;
  buttonClassName?: string;
  size?: "s" | "m";
};

const TabUi = ({ className, size, buttonClassName }: TabUiProps) => {
  const { tabLabels, tabId, setTabId } = useTabContext();
  return (
    <Box
      className={`rounded-m border-solid border-s overflow-hidden border-primary-500 bg-primary-500 gap-[1px] ${className ?? ""} `}
    >
      {tabLabels.map((tabData) => (
        <button
          key={tabData.id}
          className={`flex-1 ${tabButtonStyle({
            variant: tabData.id === tabId ? "solid" : "outline",
            size,
          })} ${buttonClassName ?? ""}`}
          onClick={() => {
            tabData.id !== tabId && setTabId(tabData.id);
          }}
        >
          <Text color={tabData.id === tabId ? "neutral-0" : "primary-500"}>
            {tabData.label}
          </Text>
        </button>
      ))}
    </Box>
  );
};
